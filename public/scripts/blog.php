<?php
    include __DIR__ . '/config.php';

    $servername = $DB_SERVER;
    $dbname = $DB_NAME;
    $username = $DB_USERNAME;
    $password = $DB_PASSWORD;

    header('Content-Type: application/json');

    function get_blog_by_id($blog_id)
    {
        global $conn;

        $checkStmt = $conn->prepare("SELECT * FROM Blogs WHERE id = :blog_id");
        $checkStmt->bindParam(':blog_id', $blog_id, PDO::PARAM_INT);
        $checkStmt->execute();
        return $checkStmt->fetch(PDO::FETCH_ASSOC);
    }

    function ensure_blog_row($blog_id)
    {
        global $conn;

        $stmt = $conn->prepare(
            "INSERT IGNORE INTO Blogs (id, title, short_description, link, views, ip_addresses)
             VALUES (:blog_id, '', '', '', 0, '')"
        );
        $stmt->bindParam(':blog_id', $blog_id, PDO::PARAM_INT);
        $stmt->execute();
    }

    function ip_already_counted($stored, $ip_address)
    {
        if (!$stored) {
            return false;
        }

        $parts = array_map('trim', explode(',', $stored));
        return in_array($ip_address, $parts, true);
    }

    function add_view_and_get_blog_by_id($blog_id, $ip_address)
    {
        global $conn;

        ensure_blog_row($blog_id);
        $blog = get_blog_by_id($blog_id);

        if (!$blog) {
            return null;
        }

        if (ip_already_counted($blog['ip_addresses'], $ip_address)) {
            unset($blog['ip_addresses']);
            $blog['views'] = intval($blog['views']);
            return $blog;
        }

        $stored = isset($blog['ip_addresses']) ? trim((string) $blog['ip_addresses']) : '';
        $next_ips = $stored === '' ? $ip_address : $stored . ', ' . $ip_address;

        $stmt = $conn->prepare(
            "UPDATE Blogs SET views = views + 1, ip_addresses = :ip_addresses WHERE id = :blog_id"
        );
        $stmt->bindParam(':blog_id', $blog_id, PDO::PARAM_INT);
        $stmt->bindParam(':ip_addresses', $next_ips);
        $stmt->execute();

        unset($blog['ip_addresses']);
        $blog['views'] = intval($blog['views']) + 1;
        return $blog;
    }

    function get_comments_by_blog_id($blog_id)
    {
        global $conn;
        $stmt = $conn->prepare("SELECT * FROM Comments WHERE blog_id = :blog_id");
        $stmt->bindParam(':blog_id', $blog_id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if ($_SERVER["REQUEST_METHOD"] == "GET") {
            $blog_id = isset($_GET["id"]) ? intval($_GET["id"]) : 0;

            if ($blog_id == 0) {
                $stmt = $conn->prepare("SELECT id, title, short_description, link, views, created_at FROM Blogs");
                $stmt->execute();
                $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($blogs);
                return;
            }

            $ip_address = $_SERVER['REMOTE_ADDR'];
            $blog = add_view_and_get_blog_by_id($blog_id, $ip_address);

            if (!$blog) {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Blog not found'
                ]);
                return;
            }

            $comments = get_comments_by_blog_id($blog_id);

            echo json_encode([
                'blog' => $blog,
                'comments' => $comments
            ]);
        } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $input = file_get_contents("php://input");
            $data = json_decode($input, true);

            $blog_id = isset($data["blogId"]) ? intval($data["blogId"]) : 0;
            $name = isset($data["name"]) ? trim($data["name"]) : '';
            $comment = isset($data["comment"]) ? trim($data["comment"]) : '';

            if ($blog_id == 0 || empty($name) || empty($comment)) {
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Invalid input'
                ]);
                return;
            }

            $stmt = $conn->prepare(
                "INSERT INTO Comments (blog_id, name, comment) VALUES (:blog_id, :name, :comment)"
            );
            $stmt->bindParam(':blog_id', $blog_id, PDO::PARAM_INT);
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':comment', $comment);
            $stmt->execute();

            $comment = [
                'id' => $conn->lastInsertId(),
                'blog_id' => $blog_id,
                'name' => $name,
                'comment' => $comment
            ];

            echo json_encode(['status' => 'success', 'comment' => $comment]);
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid request method'
            ]);
        }
    } catch (PDOException $e) {
        echo json_encode([
            'status' => 'error',
            'message' => "Connection failed: " . $e->getMessage()
        ]);
    } finally {
        $conn = null;
    }
?>
