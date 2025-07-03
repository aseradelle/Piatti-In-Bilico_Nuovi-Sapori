function checkInputs() {
  var usernameInput = document.getElementById("usernameInput").value;
  var passwordInput = document.getElementById("passwordInput").value;
  var emailInput = document.getElementById("emailInput").value;

  // Altrimenti, mostra messaggi di errore solo se necessario
  var usernameMessage = "L'username non deve contenere spazi";
  var passwordMessage = "Deve avere almeno 1 carattere speciale, 1 maiuscola ed essere almeno lunga 8 caratteri";
  var emailMessage = "Deve essere un indirizzo email valido, ad esempio: @gmail.com/.it, @outlook.com/.it, @hotmail.com/.it, @yahoo.com/.it, @libero.com/.it o .net";

  // Verifica l'username
  var usernameError = document.getElementById("usernameError");
  usernameError.innerHTML = /\s/.test(usernameInput) ? usernameMessage : "";

  // Verifica la password
  var passwordError = document.getElementById("passwordError");
  passwordError.innerHTML = /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(passwordInput) ? "" : passwordMessage;

  // Verifica l'email
  var emailError = document.getElementById("emailError");
  emailError.innerHTML = /\b[A-Za-z0-9._%+-]+@(gmail|hotmail|outlook|yahoo|libero|calvino.edu|admin)\.\w{2,}\b/.test(emailInput) ? "" : emailMessage;

  // Invia la pagina solo se non ci sono errori
  if (usernameError.innerHTML === "" && passwordError.innerHTML === "" && emailError.innerHTML === "") {
    console.log("Registrazione completata con successo!");
    document.getElementById("registrationForm").submit();
  }
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  var passwordToggle = document.querySelector(".password-toggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.innerHTML = "&#128065;"; // Unicode per "👁️" barrato
  } else {
    passwordInput.type = "password";
    passwordToggle.innerHTML = "&#128065;"; // Unicode per "👁️"
  }
}