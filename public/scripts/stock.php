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

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    // Handle GET requests - retrieve stock data
    if ($requestMethod === "GET") {
        // Validate ticker from query parameter
        if (!isset($_GET['ticker']) || empty($_GET['ticker'])) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Missing or empty ticker query parameter'
            ]);
            http_response_code(400);
            exit;
        }

        $ticker = trim($_GET['ticker']);

        // Fetch stock data from database
        $stmt = $conn->prepare("SELECT ticker, timestamp, value FROM Stocks WHERE ticker = :ticker ORDER BY timestamp ASC");
        $stmt->bindParam(':ticker', $ticker);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (empty($results)) {
            echo json_encode([
                'status' => 'success',
                $ticker => []
            ]);
            http_response_code(200);
            exit;
        }

        // Format results with ticker as key and array of {timestamp, value} as value
        $formattedData = [];
        foreach ($results as $row) {
            $formattedData[] = [
                'timestamp' => $row['timestamp'],
                'value' => $row['value']
            ];
        }

        echo json_encode([
            'status' => 'success',
            $ticker => $formattedData
        ]);
        http_response_code(200);
        exit;
    }

    // Handle POST requests - update stock data
    if ($requestMethod !== "POST") {
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid request method. Only GET and POST are allowed.'
        ]);
        http_response_code(405);
        exit;
    }

    // Get hash from request header - check multiple possible header formats
    $hash = null;

    // Check standard HTTP header format
    if (isset($_SERVER['HTTP_X_API_KEY'])) {
        $hash = $_SERVER['HTTP_X_API_KEY'];
    }
    // Check if running behind a proxy or with different header format
    elseif (isset($_SERVER['X_API_KEY'])) {
        $hash = $_SERVER['X_API_KEY'];
    }
    // Check Authorization header as fallback
    elseif (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        // If Authorization header is used, extract the token
        $auth_header = $_SERVER['HTTP_AUTHORIZATION'];
        if (preg_match('/Bearer\s+(.+)/i', $auth_header, $matches)) {
            $hash = $matches[1];
        }
    }

    // Validate hash
    if (!$hash || empty($hash)) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Missing or empty X-API-Key header'
        ]);
        http_response_code(400);
        exit;
    }

    // Validate hash against ACCESS_TOKEN
    if (trim($hash) !== $ACCESS_TOKEN) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid hash/access token',
            'received' => trim($hash),
            'expected' => $ACCESS_TOKEN
        ]);
        http_response_code(403);
        exit;
    }

    // Validate ticker from query parameter
    if (!isset($_GET['ticker']) || empty($_GET['ticker'])) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Missing or empty ticker query parameter'
        ]);
        http_response_code(400);
        exit;
    }

    $ticker = trim($_GET['ticker']);

    // Parse JSON input
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    if ($data === null) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid JSON input'
        ]);
        http_response_code(400);
        exit;
    }

    // Validate stock_data
    if (!isset($data['stock_data']) || !is_array($data['stock_data'])) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Missing or invalid stock_data array'
        ]);
        http_response_code(400);
        exit;
    }

    $stock_data = $data['stock_data'];

    // Validate stock_data array structure
    foreach ($stock_data as $index => $item) {
        if (!isset($item['timestamp']) || !isset($item['value'])) {
            echo json_encode([
                'status' => 'error',
                'message' => "Invalid stock_data structure at index $index. Each item must have 'timestamp' and 'value' keys."
            ]);
            http_response_code(400);
            exit;
        }
    }

    // Start transaction
    $conn->beginTransaction();

    try {
        // Delete all rows with the same ticker
        $deleteStmt = $conn->prepare("DELETE FROM Stocks WHERE ticker = :ticker");
        $deleteStmt->bindParam(':ticker', $ticker);
        $deleteStmt->execute();
        $deletedRows = $deleteStmt->rowCount();

        // Insert new stock data
        $insertStmt = $conn->prepare("INSERT INTO Stocks (ticker, timestamp, value) VALUES (:ticker, :timestamp, :value)");
        $insertedRows = 0;

        foreach ($stock_data as $item) {
            $insertStmt->bindParam(':ticker', $ticker);
            $insertStmt->bindParam(':timestamp', $item['timestamp']);
            $insertStmt->bindParam(':value', $item['value']);
            $insertStmt->execute();
            $insertedRows++;
        }

        // Commit transaction
        $conn->commit();

        echo json_encode([
            'status' => 'success',
            'message' => "Stock data updated successfully",
            'ticker' => $ticker,
            'deleted_rows' => $deletedRows,
            'inserted_rows' => $insertedRows
        ]);
        http_response_code(200);

    } catch (Exception $e) {
        // Rollback transaction on error
        if ($conn->inTransaction()) {
            $conn->rollBack();
        }
        throw $e;
    }

} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => "Database connection failed: " . $e->getMessage()
    ]);
    http_response_code(500);
} catch (Exception $e) {
    echo json_encode([
        'status' => 'error',
        'message' => "Error processing request: " . $e->getMessage()
    ]);
    http_response_code(500);
} finally {
    // Close the connection
    $conn = null;
}
?>