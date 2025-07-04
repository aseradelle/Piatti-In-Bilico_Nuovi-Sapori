<?php
session_start();

header('Content-Type: application/json');

if (!isset($_SESSION['username_Utente'])) {
    echo json_encode(["error" => "not_logged_in"]);
    exit;
}

$utenteId = $_SESSION['username_Utente'];

// Connessione al DB
$conn = new mysqli("localhost", "root", "", "db_progetto_demo");
if ($conn->connect_error) {
    echo json_encode(["error" => "connection_failed"]);
    exit;
}

$sql = "SELECT * FROM ordine WHERE username_Utente = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $utenteId);
$stmt->execute();
$result = $stmt->get_result();

$ordini = [];
while ($row = $result->fetch_assoc()) {
    $ordini[] = $row;
}

$stmt->close();
$conn->close();

echo json_encode($ordini);
?>