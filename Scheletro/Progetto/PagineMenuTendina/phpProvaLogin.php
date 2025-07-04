<?php
// Utilizzo la session in modo tale da passare l'username o l'email per farlo mostrare a schermo
// nella pagina index.php. Il contenuto sarà associato ad un messaggio di benvenuto
session_start();

// Connessione al database
$conn = mysqli_connect("localhost", "root", "", "db_progetto_demo");
if (!$conn) {
    exit("Errore: impossibile stabilire una connessione " . mysqli_connect_error());
}

// Passaggio delle informazioni dalla pagina index.php alla pagina phpPag_Login.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_mail = $_POST["user_mail"];
    $password = $_POST["password"];

    $query = "SELECT * FROM anagrafica_Utemte WHERE username = ? OR email = ?";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "ss", $user_mail, $user_mail);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    // Verifico se le condizioni di connessione e della query sono state eseguite con successo
    // Nel caso in cui ciò non sia avvenuto, rimando l'utente a una pagina di errore
    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $hashedPassword = $row['password'];
        if (($user_mail === 'admin' && $password === 'admin') || ($user_mail === 'backend@admin.net' && $password === 'admin')) {
            header("Location: paginaAdmin_Immagini.html"); //Cambiare la destinazione con il "secondo" sito
            exit;
        } else {
            if (password_verify($password, $hashedPassword)) {
                // Chiudo la connessione con il server
                mysqli_close($conn);
                // In caso positivo, rimando l'utente alla pagina index.php oltre a passare a quest'ultima anche il contenuto della variabile user_mail
                $_SESSION["user_mail"] = $user_mail;
                $_SESSION["username"] = $user_mail;
                 // Questa linea serve per memorizzare il nome utente in sessione
                header("Location: HomePage.html");
            } else {
                header("Location: paginaErrore.php?msg=login_failed"); //Decidere se togliere o no questo pezzo
            }
        }
    } else {
        header("Location: paginaErrore.php?msg=login_failed"); //Decidere se togliere o no questo pezzo
    }
}
?>