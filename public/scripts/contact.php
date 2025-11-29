<?php
// public/scripts/contact.php
header('Content-Type: text/plain');

function sanitize($str)
{
    return htmlspecialchars(trim($str), ENT_QUOTES, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? sanitize($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitize($_POST['email']) : '';
    $message = isset($_POST['message']) ? sanitize($_POST['message']) : '';

    if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo 'error: invalid input';
        exit;
    }

    $to = 'info@vonkprogramming.nl';
    $subject = 'Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
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
