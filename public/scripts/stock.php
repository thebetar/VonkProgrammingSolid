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

    // Only accept POST requests
    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid request method. Only POST is allowed.'
        ]);
        http_response_code(405);
        exit;
    }

    // Get hash from request header
    $hash = isset($_SERVER['HTTP_X_API_KEY']) ? $_SERVER['HTTP_X_API_KEY'] : null;

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
    if ($hash !== $ACCESS_TOKEN) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid hash/access token'
        ]);
        http_response_code(403);
        exit;
    }

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

    // Validate ticker
    if (!isset($data['ticker']) || empty($data['ticker'])) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Missing or empty ticker'
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

    $ticker = trim($data['ticker']);
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
        $deleteStmt = $conn->prepare("DELETE FROM Stock WHERE ticker = :ticker");
        $deleteStmt->bindParam(':ticker', $ticker);
        $deleteStmt->execute();
        $deletedRows = $deleteStmt->rowCount();

        // Insert new stock data
        $insertStmt = $conn->prepare("INSERT INTO Stock (ticker, timestamp, value) VALUES (:ticker, :timestamp, :value)");
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