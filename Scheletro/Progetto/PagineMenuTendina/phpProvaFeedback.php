<?php 
$connect = mysqli_connect("localhost", "root", "", "db_progetto_demo"); 
if(isset($_POST["name"])) { 
    $name = mysqli_real_escape_string($connect, $_POST["username"]); 
    $email = mysqli_real_escape_string($connect, $_POST["punteggio"]); 
    $message = mysqli_real_escape_string($connect, $_POST["message"]); 
    $sql = "INSERT INTO feedback(username_Utente, message, punteggio) VALUES ('".$name."', ".$message."', '".$punteggio"')"; 
    if(mysqli_query($connect, $sql)) { 
        echo "Messaggio Inviato!"; 
    } 
} 
?>