//- Ejercicios Eventos 3
//Partiendo del ejemplo de geometría, crear un programa que nos permita borrar/añadir figuras a nuestro HTML por medio de JS
//- Si la figura ya se encuentra pintada en nuestro HTML, no se puede volver a añadir
//- Si la figura a añadir no está en nuestro CSS, no podemos añadirla al HTML
//- Si la figura no está, no se puede borrar

// Añadir links CSS
let linkStyle= document.createElement("link")
linkStyle.setAttribute("rel","stylesheet")
linkStyle.setAttribute("href", "style.css")
linkStyle.setAttribute("TYPE","text/css")
document.head.appendChild(linkStyle);

let CSSSelectors = [];
linkStyle.addEventListener("load", function(){
    // Solo funciona con un servidor local
    // politica de seguridad CORS
    CSSSelectors = Array.from(document.styleSheets[0].rules).map(rule=> rule.selectorText);
    // Con slice(1) podemos eliminar el primer caracter
});

function getNombreFigura() {
  return document.getElementById("dato").value;
}

function esFiguraDisponible (nombreFigura) {
  //return CSSSelectors.some(selector => selector == '#'+nombreFigura);
  return (CSSSelectors.indexOf('#'+nombreFigura) != -1);
}

function getFigura(nombreFigura) {
  return document.getElementById(nombreFigura);
}

function addFigura (nombreFigura) {
  let figura = document.createElement("div");
  figura.setAttribute("id", nombreFigura);
  figura.setAttribute("class", "forma");
  document.body.appendChild(figura);  
}

function removeFigura(figura) {
  document.body.removeChild(figura);
}

document.getElementById("botonCrear").addEventListener("click", function(){
  //<div id="circulo" class="forma"></div>
  let nombreFigura = getNombreFigura();
  
  if (!nombreFigura) {
    alert("Por favor introduzca el nombre de la figura a crear");
    return false;
  } else if (!esFiguraDisponible(nombreFigura)) {
    alert(`La figura ${nombreFigura} no está disponible`);
    return false;
  } else if (getFigura(nombreFigura)) {
    alert(`Ya existe la figura ${nombreFigura}`);
    return false;
  }
  
  addFigura(nombreFigura);
  return true;
});

document.getElementById("botonBorrar").addEventListener("click", function(){
  let nombreFigura = getNombreFigura();

  if (!nombreFigura) {
    alert("Por favor introduzca el nombre de la figura a borrar");
    return false;
  }
  
  let figura = getFigura(nombreFigura);
  if (!figura) {
    alert(`No existe la figura ${nombreFigura}`);
    return false;
  }
   
  removeFigura(figura);
  return true;
});
