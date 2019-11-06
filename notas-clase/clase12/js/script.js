var parrafos = document.getElementsByTagName("p");

for (var i=0; i<parrafos.length; i++) {
    console.log(parrafos[i].innerHTML)
}

var parrafos2 = document.getElementsByName("tipo1"); 

for (var i=0; i<parrafos2.length; i++) {
    console.log(parrafos2[i].innerHTML)
}

console.log(document.getElementsByTagName("a")[0].href);

// Acceder por clase
var parrafos3 = document.getElementsByClassName("clase1");

console.log("Resultado: " + parrafos3[1].innerHTML);

// querySelector

var parrafos4 = document.querySelectorAll("p");
for (var i=0; i<parrafos4.length; i++) {
    var elemento = parrafos4[i];
    console.log("Elemento: " + elemento.innerHTML);
}

var spans = document.querySelectorAll('#miDiv #miId2.clase2')

console.log(spans[0].innerHTML);

// modificando estilos
document.querySelector('#p4').classList.add('clase1');
document.querySelector('#p4').classList.toggle('clase1');

var parrafo = document.querySelector('#p4');
document.getElementById('boton').addEventListener('click', function(){parrafo.classList.toggle('clase2')});

// crear nuevo elemento en el DOM
var parrafo2 = document.createElement('p');
var contenido = document.createTextNode("Mi nuevo párrafo desde JS!!");

// Enlazar nodo parrafo con nodo texto
parrafo2.appendChild(contenido);
// Enlazar el articulo
var articulo = document.querySelector("article");
articulo.appendChild(parrafo2);

// colgar una lista por JS
//<ul>
//  <li>Coffee</li>
//  <li>Tea</li>
//  <li>Milk</li>
//</ul>

function addElement(lista, contenidoElemento){
  let contenido = document.createTextNode(contenidoElemento);
  let elemento = document.createElement('li');
  elemento.appendChild(contenido);
  lista.appendChild(elemento);
}

/*
var lista = document.createElement('ul');

// var elemento1 = document.createElement('li');
// var texto1 = document.createTextNode('Coffee');

// elemento1.appendChild(texto1);
// lista.appendChild(elemento1);
addElement(lista, 'Coffee');
addElement(lista, 'Tea');
addElement(lista, 'Milk');

document.body.appendChild(lista);
*/
function addList (elementos) {
    let lista = document.createElement('ul');
    elementos.map(elemento => addElement(lista,elemento));
    //document.body.appendChild(lista);
    document.getElementById("listas").appendChild(lista);
}

addList(['Coffee', 'Tea', 'Milk']);

// Notas de Alejandro
var productos = ["Pescado", "Naranjas", "Coca Cola", "Pan"];
var lista = document.createElement("ul");
for (var i=0; i<productos.length;i++) {
    var elem = document.createElement("li");
    var txt = document.createTextNode(productos[i]);
    elem.appendChild(txt);
    lista.appendChild(elem);
}
document.getElementById("listas").appendChild(lista);

var lista2= document.createElement("ul");
lista2.setAttribute("id","lista2");
document.getElementById("listas").appendChild(lista2);
document.getElementById("lista2").innerHTML = "<li>Pescado</li><li>Naranjas</li><li>Coca Cola</li><li>Pan</li>";


// clase 13 //
function cambiarFondo() {
    // color = 'rgb(0-255,0-255,0-255'
    var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
    color += Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ')';
    document.body.style.backgroundColor= color;
    console.info("Nuevo color:", color);
}
function cambiarEstilo() {
    document.getElementById("eventos").style.border = "4px dotted blue";
}

// con funcion anonima y actuando sobre el elemento
document.getElementById("boton1").onclick = function()
{
    //document.body.style.backgroundColor="rgb(1,2,3)";
    document.body.style.background="lightblue";
    console.log('haz algo');
}

// Con funcion creada en JS
document.getElementById("boton2").onclick = cambiarFondo;

// Probando listeners
document.getElementById("boton3").addEventListener("click", cambiarEstilo)

document.getElementById("myP").style.visibility="hidden";

document.getElementById("eventos").addEventListener("mouseover", function(){
    var eventos = document.getElementById("eventos");
    eventos.style.fontFamily = "Arial, Helvetica, sans-serif";
    eventos.style.background = "yellow";
    document.getElementById("myP").style.visibility="visible";
});

document.getElementById("eventos").addEventListener("mouseout", function(){
    document.getElementById("myP").style.visibility="hidden";
});

// 
// parrafo.classList.toggle("myStyle");

// hacer con mouseover, que se muestre un parrafo escondido cuando pase el ratón sobre el div de enventos

//document.getElementById("myP").style.display="none";
//document.getElementById("myP").style.visibility="hidden";

//document.getElementById("eventos").addEventListener("blur",function(){
//    document.getElementById("myP").style.display="none";
//});
