<?php
include __DIR__ . '/config.php';

$servername = $DB_SERVER;
$dbname = $DB_NAME;
$username = $DB_USERNAME;
$password = $DB_PASSWORD;

function get_blog_by_id(
    $blog_id,
) {
    
    global $conn;

    // Check if blog already exists
    $checkStmt = $conn->prepare("SELECT * FROM Blogs WHERE id = :blog_id");
    $checkStmt->bindParam(':blog_id', $blog_id);
    $checkStmt->execute();
    $blog = $checkStmt->fetch(PDO::FETCH_ASSOC);

    return $blog;
}

function add_view_and_get_blog_by_id(
    $blog_id,
    $ip_address
) {
    global $conn;

    $blog = get_blog_by_id($blog_id);

    if (!$blog) {
        return null; // Blog not found
    }

    // Check if IP address already exists
    if ($blog['ip_addresses'] && strpos($blog['ip_addresses'], $ip_address) !== false) {
        // Remove ip_addresses from return value
        unset($blog['ip_addresses']);

        return $blog;
    }

    // Increment views and add IP address
    $stmt = $conn->prepare("UPDATE Blogs SET views = views + 1, ip_addresses = CONCAT(ip_addresses, ', ', :ip_address) WHERE id = :blog_id");
    $stmt->bindParam(":blog_id", $blog_id);
    $stmt->bindParam(":ip_address", $ip_address);
    $stmt->execute();

    // Remove ip_addresses from return value
    unset($blog['ip_addresses']);

    return $blog;
}

function get_comments_by_blog_id($blog_id)
{
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM Comments WHERE blog_id = :blog_id");
    $stmt->bindParam(':blog_id', $blog_id);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

try {
    // Create connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        // Get the blog ID
        $blog_id = isset($_GET["id"]) ? intval($_GET["id"]) : 0;

        // Check if blog ID is valid
        if (
            $blog_id == 0
        ) {
            // Return all blogs (id, views and created_at)
            $stmt = $conn->prepare("SELECT id, title, short_description, link, views, created_at FROM Blogs");
            $stmt->execute();
            $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);

            // Set response header to JSON
            header('Content-Type: application/json');
            // Return all blogs
            echo json_encode($blogs);
            return;
        }

        // Get IP address
        $ip_address = $_SERVER['REMOTE_ADDR'];

        // Add view
        $blog = add_view_and_get_blog_by_id(
            $blog_id, 
            $ip_address
        );

        if (!$blog) {
            header('Content-Type: plain/text');
            echo "Blog not found";
            return;
        }

        // Get comments
        $comments = get_comments_by_blog_id($blog_id);

        // Set response header to JSON
        header('Content-Type: application/json');

        // Return blog and comments
        echo json_encode([
            'blog' => $blog,
            'comments' => $comments
        ]);
    } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Parse JSON input
        $input = file_get_contents("php://input");
        $data = json_decode($input, true);

        // Handle comment submission
        $blog_id = isset($data["blogId"]) ? intval($data["blogId"]) : 0;
        $name = isset($data["name"]) ? trim($data["name"]) : '';
        $comment = isset($data["comment"]) ? trim($data["comment"]) : '';

        // Validate input
        if ($blog_id == 0 || empty($name) || empty($comment)) {
            header('Content-Type: plain/text');
            echo "Invalid request";
            return;
        }

        // Insert comment into database
        $stmt = $conn->prepare("INSERT INTO Comments (blog_id, name, comment) VALUES (:blog_id, :name, :comment)");
        $stmt->bindParam(':blog_id', $blog_id);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':comment', $comment);
        $stmt->execute();

        $comment = [
            'id' => $conn->lastInsertId(),
            'blog_id' => $blog_id,
            'name' => $name,
            'comment' => $comment
        ];

        // Set response header to JSON
        header('Content-Type: application/json');
        // Return success response
        echo json_encode(['status' => 'success', 'comment' => $comment]);
    } else {
        header('Content-Type: plain/text');
        echo "Invalid request";
    }
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
} finally {
    // Close the connection
    $conn = null;
}
?>