<?php
    require_once __DIR__ . '/../vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
    $dotenv->load();

    $servername = getenv('DB_SERVER');
    $dbname = getenv('DB_NAME');
    $username = getenv('DB_USERNAME');
    $password = getenv('DB_PASSWORD');

    try {
        // Create connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // Set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
        if($_SERVER["REQUEST_METHOD"] != "POST") {
            echo "Invalid request";
            return;
        }

        // Get the raw POST data
        $rawData = file_get_contents("php://input");
        $data = json_decode($rawData, true);

        if(!isset($data['email'])) {
            echo "Invalid request";
            return;
        }

        $email = $data['email'];

        // Check if email already exists
        $checkStmt = $conn->prepare("SELECT COUNT(*) FROM Subscribers WHERE email = :email");
        $checkStmt->bindParam(':email', $email);
        $checkStmt->execute();
        $emailExists = $checkStmt->fetchColumn();

        if ($emailExists) {
            echo "exists";
            return;
        }
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO Subscribers (email) VALUES (:email)");
        $stmt->bindParam(':email', $email);

        // Execute the statement
        if ($stmt->execute()) {
            echo "success";
        } else {
            echo "failed";
        }
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    } finally {
        // Close the connection
        $conn = null;
    }
    
?>