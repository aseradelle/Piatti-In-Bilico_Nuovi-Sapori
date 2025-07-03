<?php
  session_start();

  // Connessione al database
  $conn = mysqli_connect("localhost", "root", "", "database_demo");
  if (!$conn) {
    exit("Errore: impossibile stabilire una connessione " . mysqli_connect_error());
  }

  // Creazione della tabella "utente" nel caso in cui non esistesse
  $sql = "
    CREATE TABLE IF NOT EXISTS utente (
    email varchar(25) NOT NULL,
    password varchar(20) NULL,
    username varchar(15) NOT NULL,
    PRIMARY KEY (email)
    )ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;
  ";

if (!mysqli_query($conn, $sql)) {
  exit("Errore durante la creazione della tabella " . mysqli_error($conn));
}
echo "Tabella creata con successo";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $email = $_POST["email"];
  $password = $_POST["password"];

  if (empty($username) || empty($email) || empty($password)) {
    mysqli_close($conn);
    exit("Errore: tutti i campi sono obbligatori.");
  }

  $query = "SELECT * FROM utente WHERE username = '$username' OR email = '$email'";
  $result = mysqli_query($conn, $query);

  if (!$result || mysqli_num_rows($result) > 0) {
    mysqli_close($conn);
    header("Location: paginaGiaRegistrato.php?msg=gia_regi"); //Vedere se tenerla oppure no
    exit;
  }

  $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
  $queryInsert = "INSERT INTO utente (username, email, password) VALUES ('$username', '$email' , '$hashedPassword')";
  $resultInsert = mysqli_query($conn, $queryInsert);

  if (!$resultInsert) {
    mysqli_close($conn);
    exit("Errore durante la registrazione " . mysqli_error($conn));
  }

  mysqli_close($conn);
  
  // Aggiunta del controllo per il reindirizzamento dell'utente admin
  if ($username === "admin" && $email === "backend@admin.net" && $password === "adminLol.!") {
    header("Location: paginaAdmin_Immagini.html"); //Controllo per decidere se inserirlo
    exit;
  }
  
  header("Location: HomePage.html");
}
?>