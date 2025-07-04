function checkInputs() {
  var user_mailInput = document.getElementById("user_mailInput").value;
  var passwordInput = document.getElementById("passwordInput").value;
  //var emailInput = document.getElementById("user_mailInput").value;

  var user_mailMessage = "L'username non deve contenere spazi oppure l'email deve essere un indirizzo email valido, ad esempio: @gmail.com/.it, @outlook.com/.it, @hotmail.com/.it, @yahoo.com/.it, @libero.com/.it o .net";
  var passwordMessage = "Deve avere almeno 1 carattere speciale, 1 maiuscola ed essere almeno lunga 8 caratteri";

  // Verifica l'username o l'email
  var user_mailError = document.getElementById("user_mailError");
  var emailRegex = /\b[A-Za-z0-9._%+-]+@(gmail|hotmail|outlook|yahoo|libero|calvino.edu|admin)\.\w{2,}\b/;
  var usernameRegex = /^[a-zA-Z0-9]+$/;
  if (!emailRegex.test(user_mailInput.trim()) && !usernameRegex.test(user_mailInput.trim())) {
    user_mailError.innerHTML = user_mailMessage;
  } else {
    user_mailError.innerHTML = "";
  }

  // Verifica la password
  var passwordError = document.getElementById("passwordError");
  if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(passwordInput)) {
    passwordError.innerHTML = passwordMessage;
  } else {
    passwordError.innerHTML = "";
  }

  // Permette di visualizzare o nascondere il messaggio di errore
  user_mailError.style.display = user_mailError.innerHTML ? "block" : "none";
  passwordError.style.display = passwordError.innerHTML ? "block" : "none";

  // Invia la pagina solo se non ci sono errori
  if (user_mailError.innerHTML === "" && passwordError.innerHTML === "") {
    document.getElementById("certificationForm").submit();
  }
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  var passwordToggle = document.querySelector(".password-toggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.innerHTML = "&#128065;"; // Unicode per "👁️" 
  } else {
    passwordInput.type = "password";
    passwordToggle.innerHTML = "&#128065;"; // Unicode per "👁️"
  }
}