<?php
    include __DIR__ . '/config.php';

    $servername = $DB_SERVER;
    $dbname = $DB_NAME;
    $username = $DB_USERNAME;
    $password = $DB_PASSWORD;

    try {
        // Create connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // Set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
        if ($_SERVER["REQUEST_METHOD"] != "POST") {
            if ($_SERVER["REQUEST_METHOD"] == "GET") {
                $accessToken = $_GET['access_token'] ?? '';

                if ($accessToken != $ACCESS_TOKEN) {
                    echo "Invalid access token";
                    return;
                }

                // Handle GET request logic here
                $stmt = $conn->prepare("SELECT email FROM Subscribers");
                $stmt->execute();
                $subscribers = $stmt->fetchAll(PDO::FETCH_ASSOC);

                echo json_encode($subscribers);
            }

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