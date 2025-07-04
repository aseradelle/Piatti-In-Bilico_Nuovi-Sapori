<?php
session_start();

// Verifica se l'utente è loggato
if (!isset($_SESSION['utente_id'])) {
    header("Location: ../PagineMenuTendina/Login.html");
    exit();
}

$utenteId = $_SESSION['utente_id'];

// Connessione al DB
$conn = new mysqli("localhost", "root", "", "nome_tuo_db");
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Recupera gli ordini dell'utente
$sql = "SELECT * FROM ordini WHERE id_utente = ?";
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
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Inserire nome sito - Menù</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="" type="image/png"/>
    <link rel="stylesheet" href="cssProvaMenu.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  </head>
  <body>
  
    <div class="contenitore-generale">
      <div class="contenitore-unTerzo">
        <div class="sidebar-info">
          <a href="#" class="logo">
            <img src="../img/Brown_Simple_Circle_Restaurant_Logo__1_-removebg-preview.png" alt="Logo del ristorante">
            <span>Piatti in Bilico</span>
          </a>
          <div class="menu">
            <a href="../HomePage.html">
                <span class="icon">
                    <i class="ri-home-line"></i>
                </span>
                HomePage
            </a>
            <a href="./Menu.html">
                <span class="icon">
                    <i class="ri-restaurant-2-line"></i>
                </span>
                Menù
            </a>
            <a href="../PagineMenuTendina/Tavoli.html">
                <span class="icon">
                    <i class="ri-table-line"></i>
                </span>
                Tavoli
            </a>
            <a class="active" href="#">
              <span class="icon">
                <i class="ri-shopping-cart-line"></i>
              </span>
              Ordini
            </a>
            <a href="../PagineMenuTendina/Feedback.html">
              <span class="icon">
                  <i class="ri-feedback-line"></i>
              </span>
              Feedback
            </a>
            <a href="../PagineMenuTendina/Login.html">
                <span class="icon">
                    <i class="ri-login-box-line"></i>
                </span>
                Login
            </a>
          </div>
        </div>
      </div>
      <div class="contenitore-dueTerzi">
        <div class="w3-main w3-padding-large">
            <div class="w3-content w3-padding-32" id="storia">
                <h1>Prenotazione</h1>
                <hr>
                <div class="composizione-container">
                    <?php if (count($ordini) > 0): ?>
                        <?php foreach ($ordini as $ordine): ?>
                            <div class="ordine-box <?= $ordine['stato'] === 'completato' ? 'completato' : '' ?>">
                                <div class="ordine-titolo">
                                    Ordine #<?= $ordine['id'] ?>
                                </div>
                                <p>Data e ora: <?= date("d/m/Y H:i", strtotime($ordine['data_ora'])) ?></p>
                                <p>Numero Persone: <?= $ordine['numero_persone'] ?></p>
                                <p>ID Tavolo: <?= $ordine['id_tavolo'] ?></p>

                                <div class="ordine-buttons">
                                    <a href="modifica_ordine.php?id=<?= $ordine['id'] ?>" class="modifica-btn">
                                        Modifica
                                    </a>
                                    <a href="elimina_ordine.php?id=<?= $ordine['id'] ?>" class="elimina-btn" onclick="return confirm('Sei sicuro di voler annullare questo ordine?');">
                                        Annulla
                                    </a>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php else: ?>
                        <p>Non hai ancora ordini registrati.</p>
                    <?php endif; ?>
                </div>
            </div>
        <footer class="w3-round w3-container w3-padding-32 w3-center">© Anno di sviluppo della pagina e proprietario del locale. Tutti i diritti riservati. Poi inserire i contatti</footer>
      </div>
    </div>
  </body>
</html>