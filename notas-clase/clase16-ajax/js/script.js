// creamos la imagen sin src
let foto = document.createElement("img");
//imagen.setAttribute("src", url);
foto.style.display="none"
document.getElementById("resultado").appendChild(foto);  

/**
 * Función union
 * @param {String} cadena1 
 * @param {String} cadena2
 * @returns {String} Devuelve las cadenas concatenadas
 */
function union(cadena1,cadena2){
  return cadena1+" "+cadena2
}

/**
 *  Metodo para devolver datos
 *  @param {string} url La url para acceder a la peticion AJAX.
 */
function peticionAjax(url) {
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      let url = JSON.parse(xmlHttp.responseText).message;
      //console.info(JSON.parse(xmlHttp.responseText));
      console.info(url);
      
      let imagen = document.querySelector("img");
      imagen.setAttribute("src", url);
      //document.getElementById("resultado").appendChild(imagen);  
      imagen.style.display="block";
      
    } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
      console.error("ERROR! 404");
      console.info(JSON.parse(xmlHttp.responseText));
    }
  };
  xmlHttp.open("GET", url, true);
  xmlHttp.send();
}

document.getElementById("boton1").addEventListener("click", function(){
  peticionAjax("https://dog.ceo/api/breeds/image/random");
});

document.querySelector("img").addEventListener("load", {
  
});

//peticionAjax("https://dog.ceo/api/breeds/image/random"); //perro
