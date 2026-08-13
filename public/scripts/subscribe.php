<?php
    include __DIR__ . '/config.php';

    $servername = $DB_SERVER;
    $dbname = $DB_NAME;
    $username = $DB_USERNAME;
    $password = $DB_PASSWORD;

    header('Content-Type: application/json');

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->exec(
            "CREATE TABLE IF NOT EXISTS Subscribers (
                id INT PRIMARY KEY AUTO_INCREMENT,
                email VARCHAR(255) NOT NULL UNIQUE,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )"
        );

        if ($_SERVER["REQUEST_METHOD"] != "POST") {
            if ($_SERVER["REQUEST_METHOD"] == "GET") {
                $accessToken = $_GET['access_token'] ?? '';

                if ($accessToken != $ACCESS_TOKEN) {
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Invalid access token'
                    ]);
                    return;
                }

                $stmt = $conn->prepare("SELECT email FROM Subscribers");
                $stmt->execute();
                $subscribers = $stmt->fetchAll(PDO::FETCH_ASSOC);

                echo json_encode($subscribers);
                return;
            }

            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
            return;
        }

        $rawData = file_get_contents("php://input");
        $data = json_decode($rawData, true);

        if (!isset($data['email'])) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid request'
            ]);
            return;
        }

        $email = strtolower(trim($data['email']));

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid email'
            ]);
            return;
        }

        $checkStmt = $conn->prepare("SELECT COUNT(*) FROM Subscribers WHERE email = :email");
        $checkStmt->bindParam(':email', $email);
        $checkStmt->execute();
        $emailExists = $checkStmt->fetchColumn();

        if ($emailExists) {
            echo json_encode([
                'status' => 'error',
                'message' => 'exists'
            ]);
            return;
        }

        $stmt = $conn->prepare("INSERT INTO Subscribers (email) VALUES (:email)");
        $stmt->bindParam(':email', $email);

        if ($stmt->execute()) {
            echo json_encode([
                'status' => 'success',
                'message' => 'Subscription successful',
                'email' => $email
            ]);
        } else {
            echo json_encode([
                'status' => 'error',
                'message' => 'Subscription failed'
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
