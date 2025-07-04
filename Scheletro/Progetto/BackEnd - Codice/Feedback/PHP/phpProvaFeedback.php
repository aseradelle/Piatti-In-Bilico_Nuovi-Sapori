<?php 
$connect = mysqli_connect("localhost", "root", "", "database_demo"); 
if(isset($_POST["name"])) { 
    $name = mysqli_real_escape_string($connect, $_POST["name"]); 
    $email = mysqli_real_escape_string($connect, $_POST["email"]); 
    $message = mysqli_real_escape_string($connect, $_POST["message"]); 
    $sql = "INSERT INTO feedback(name, email, message) VALUES ('".$name."', '".$email."','".$message."')"; 
    if(mysqli_query($connect, $sql)) { 
        echo "Messaggio Inviato!"; 
    } 
} 
?>