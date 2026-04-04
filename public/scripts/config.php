<?php
// Database configuration
$DB_SERVER = getenv('DB_SERVER') ?: 'db';
$DB_NAME = getenv('DB_NAME') ?: 'test_db';
$DB_USERNAME = getenv('DB_USERNAME') ?: 'admin';
$DB_PASSWORD = getenv('DB_PASSWORD') ?: 'admin';

$ACCESS_TOKEN = getenv('ACCESS_TOKEN') ?: 'e58129e991b9fea196fd601fa6ec9c6eec7a81e3';
?>