function ajaxHandler (url){
  fetch(url)
    .then(function(response) {
      console.log("--Promesa 1--");
      //Hacer la conversión a JSON
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log("--Promesa 2--");  
      console.log(data);
      document.getElementById("resultado").innerText=data.result;      
    })
    .catch(function(error) {
      console.log(error)
    });  
}

document.getElementById("boton").addEventListener("click", function() {
  console.log("lanzando fetch");
  ajaxHandler("https://api.rand.fun/games/rockpaperscissorslizardspock")
});