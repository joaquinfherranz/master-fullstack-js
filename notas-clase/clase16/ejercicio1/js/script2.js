function peticionPolen(url) {
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      let respuesta = JSON.parse(xmlHttp.responseText);
      console.info(respuesta);
      // mostrar un dato
      /*
      let resultado = document.createElement("p");
      resultado.setAttribute("id", "resultado2");
      resultado.innerHTML = respuesta[0].mediciones.Aliso.fecha;
      document.body.appendChild(resultado);
      */
      respuesta.forEach(function(estacion){
        let estacionDOM = document.createElement("div");
        estacionDOM.setAttribute("id", estacion.id);
        document.getElementById("mediciones").appendChild(estacionDOM);

        //Arganzuela, Salamanca, Ciudad Universitaria
        console.log(estacion.name);
        let nombreDOM = document.createElement("h2");
        nombreDOM.innerHTML=estacion.name;
        estacionDOM.appendChild(nombreDOM);
        
        let listaDOM = document.createElement("ul");
        for (medida in estacion.mediciones) {
          console.log(medida);
          let medidaDOM = document.createElement("li");
          medidaDOM.innerHTML=`${medida}: `+ 
            `día ${estacion.mediciones[medida].fecha},
            valor ${estacion.mediciones[medida].valor},
            resumen ${estacion.mediciones[medida].resumen}`
          listaDOM.appendChild(medidaDOM);
          //document.getElementById(estacion.id).appendChild()
        }
        estacionDOM.appendChild(listaDOM);
      });
    } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
      console.error("ERROR! 404");
      console.info(JSON.parse(xmlHttp.responseText));
    }
  };
  xmlHttp.open("GET", url, true);
  xmlHttp.send();
}

document.getElementById("boton2").addEventListener("click", function(){
  peticionPolen("http://airemad.com/api/v1/pollen");
});

