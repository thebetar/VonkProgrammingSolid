<?php
include __DIR__ . '/config.php';

$servername = $DB_SERVER;
$dbname = $DB_NAME;
$username = $DB_USERNAME;
$password = $DB_PASSWORD;

function add_view($blog_id, $ip_address)
{
    global $conn;

    // Check if blog already exists
    $checkStmt = $conn->prepare("SELECT * FROM Blogs WHERE id = :blog_id");
    $checkStmt->bindParam(':blog_id', $blog_id);
    $checkStmt->execute();
    $blog = $checkStmt->fetch();

    $stmt = null;

    if (!$blog) {
        // Add blog with one view
        $stmt = $conn->prepare("INSERT INTO Blogs (id, views, ip_addresses) VALUES (:blog_id, 1, :ip_address)");
        $stmt->bindParam(':blog_id', $blog_id);
        $stmt->bindParam(':ip_address', $ip_address);
        $stmt->execute();
        return;
    }

    // Check if IP address already exists
    if ($blog['ip_addresses'] && strpos($blog['ip_addresses'], $ip_address) !== false) {
        return;
    }
    // Increment views and add IP address
    $stmt = $conn->prepare("UPDATE Blogs SET views = views + 1, ip_addresses = CONCAT(ip_addresses, ', ', :ip_address) WHERE id = :blog_id");
    $stmt->bindParam(":blog_id", $blog_id);
    $stmt->bindParam(":ip_address", $ip_address);
    $stmt->execute();
}

function get_view_count($blog_id)
{
    global $conn;
    $stmt = $conn->prepare("SELECT views FROM Blogs WHERE id = :blog_id");
    $stmt->bindParam(':blog_id', $blog_id);
    $stmt->execute();
    $blog = $stmt->fetch();
    return $blog ? $blog['views'] : 0;
}

function get_comments($blog_id)
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
        $blog_id = isset($_GET["blog_id"]) ? intval($_GET["blog_id"]) : 0;

        // Check if blog ID is valid
        if ($blog_id == 0) {
            echo "Invalid request";
            return;
        }

        // Get IP address
        $ip_address = $_SERVER['REMOTE_ADDR'];

        // Add view
        add_view($blog_id, $ip_address);

        // Get view count
        $view_count = get_view_count($blog_id);

        // Get comments
        $comments = get_comments($blog_id);

        echo json_encode([
            'view_count' => $view_count,
            'comments' => $comments
        ]);
    } else {
        echo "Invalid request";
    }

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
} finally {
    // Close the connection
    $conn = null;
}

?>