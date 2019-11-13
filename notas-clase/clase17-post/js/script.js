function enviarForm() {
  alert('Se ha enviado');
  var pass = document.getElementById("pass");
  var user = document.getElementById("user");

  console.log("Bienvenido " + user);
}

document.getElementById("boton").addEventListener("click", enviarForm);