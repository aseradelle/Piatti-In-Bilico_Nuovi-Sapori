document.querySelectorAll(".tavolo").forEach(tavolo => {
  tavolo.addEventListener("click", () => {
    const id = tavolo.dataset.id;
    const status = tavolo.dataset.status;
    const posti = tavolo.dataset.posti;

    document.getElementById("tavoloModal").style.display = "flex";
    document.getElementById("statusIndicator").className = "";
    document.getElementById("statusIndicator").classList.add(status);
    document.getElementById("modalTitle").textContent = `Tavolo #${id} - ${status.toUpperCase()}`;
    document.getElementById("postiDisponibili").textContent = posti;
    document.getElementById("postiPrenotare").max = posti;
    document.getElementById("postiPrenotare").value = 1;
    document.getElementById("nomePrenotazione").value = "";
    document.getElementById("emailPrenotazione").value = "";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  document.getElementById("tavoloModal").style.display = "none";
});

document.getElementById("confermaPrenotazione").addEventListener("click", () => {
  const nome = document.getElementById("nomePrenotazione").value;
  const email = document.getElementById("emailPrenotazione").value;
  const posti = document.getElementById("postiPrenotare").value;
  alert(`Prenotazione confermata!\nNome: ${nome}\nEmail: ${email}\nPosti: ${posti}`);
  document.getElementById("tavoloModal").style.display = "none";
});
