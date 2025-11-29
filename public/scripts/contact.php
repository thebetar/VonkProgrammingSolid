<?php
// public/scripts/contact.php
header('Content-Type: text/plain');

function sanitize($str)
{
    return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $name = isset($data['name']) ? sanitize($data['name']) : '';
    $email = isset($data['email']) ? sanitize($data['email']) : '';
    $message = isset($data['message']) ? sanitize($data['message']) : '';
    $questionType = isset($data['questionType']) ? sanitize($data['questionType']) : '';

    if (!$name || !$email || !$message || !$questionType || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo 'error: invalid input';
        exit;
    }

    $to = 'info@vonkprogramming.nl';
    $subject = 'Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nType of question: $questionType\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo 'success';
    } else {
        http_response_code(500);
        echo 'error: mail failed';
    }
} else {
    http_response_code(405);
    echo 'error: method not allowed';
}
