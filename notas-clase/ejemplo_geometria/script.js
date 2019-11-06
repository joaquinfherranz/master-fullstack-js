//- Ejercicios Eventos 3
//Partiendo del ejemplo de geometría, crear un programa que nos permita borrar/añadir figuras a nuestro HTML por medio de JS
//- Si la figura ya se encuentra pintada en nuestro HTML, no se puede volver a añadir
//- Si la figura a añadir no está en nuestro CSS, no podemos añadirla al HTML
//- Si la figura no está, no se puede borrar

// Añadir links CSS
var linkStyle= document.createElement("link")
linkStyle.setAttribute("rel","stylesheet")
linkStyle.setAttribute("href", "style.css")
linkStyle.setAttribute("TYPE","text/css")

document.head.appendChild(linkStyle);

linkStyle.addEventListener("load", function(){
    figurasPosibles = Array.from(document.styleSheets[0].rules).map(rule=> rule.selectorText);
});

let figurasPosibles = [];
// (function() {
//     figurasPosibles = document.styleSheets[0].rules.map(rule=> rule.selectorText);
// })();
//document.styleSheets[0].rules[0].selectorText



function getFigura() {
    let dato = document.getElementById("dato");
    return document.getElementById("dato").value;
}

let botonCrear = document.getElementById("botonCrear");
botonCrear.addEventListener("click", function(){
    //<div id="circulo" class="forma"></div>
    let id = getFigura();
    if (!id) {
        alert("Por favor introduzca el nombre de la figura a crear");
        return false;
    } 
    if (figurasPosibles.filter(selector => selector == '#'+id).length==0) {
        alert(`La figura ${id} no está disponible`);
        return false;
    }
    if (document.getElementById(id)!=null) {
        alert(`Ya existe un ${id}`);
        return false;
    }
    let figura = document.createElement("div");
    figura.setAttribute("id", id);
    figura.setAttribute("class", "forma");
    document.body.appendChild(figura);
    return true;
});

let botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", function(){
    let id = getFigura();
    let figura = document.getElementById("circulo");
    document.body.removeChild(figura);
});

/*
// Añadir circulo por JS
var divCirculo= document.createElement("div")
divCirculo.setAttribute("id","circulo")
divCirculo.setAttribute("class","forma")

document.body.appendChild(divCirculo)
*/


/*----------------------------------------------*/
// Como leer el input de insertar
// Solución JS aquí
