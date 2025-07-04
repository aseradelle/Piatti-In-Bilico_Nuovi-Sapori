document.addEventListener("DOMContentLoaded", () => {
    fetch("../PagineMenuTendina/phpProvaOrdini.php")
      .then(response => response.json())
      .then(data => {
          const container = document.getElementById("ordini-container");
          container.innerHTML = "";

          if (data.error) {
              if (data.error === "not_logged_in") {
                  window.location.href = "../PagineMenuTendina/Login.html";
              } else {
                  container.innerHTML = "<p>Errore nel caricamento ordini.</p>";
              }
              return;
          }

          if (data.length === 0) {
              container.innerHTML = "<p>Non hai ancora ordini registrati.</p>";
              return;
          }

          data.forEach(ordine => {
              const div = document.createElement("div");
              div.className = "ordine-box" + (ordine.stato === "completato" ? " completato" : "");

              div.innerHTML = `
                  <div class="ordine-titolo">Ordine #${ordine.id}</div>
                  <p>Data e ora: ${new Date(ordine.data).toLocaleString("it-IT")}</p>
                  <p>Numero Persone: ${ordine.numero_persone}</p>
                  <p>ID Tavolo: ${ordine.id_tavolo}</p>
                  <div class="ordine-buttons">
                      <a href="modifica_ordine.php?id=${ordine.id}" class="modifica-btn">Modifica</a>
                      <a href="elimina_ordine.php?id=${ordine.id}" class="elimina-btn"
                         onclick="return confirm('Sei sicuro di voler annullare questo ordine?')">Annulla</a>
                  </div>
              `;

              container.appendChild(div);
          });
      })
      .catch(err => {
          document.getElementById("ordini-container").innerHTML =
            "<p>Errore nella comunicazione col server.</p>";
      });
});