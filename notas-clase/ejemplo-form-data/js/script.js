/*
var formData = new FormData();

formData.append("usuario", "Ulises");
formData.append("id", 123456); // todo se convierte a String
/*
// Contenido desde un <input type="file"> desde el HTML
formData.append("fichero1", fileInputElement.files[0]);

// Fichero creado al vuelo con JavaScript
var content = '<a id="a"><b id="b">hey!</b></a>'; // El contenido del nuevo fichero
var blob = new Blob([content], { type: "text/xml"});

formData.append("otro_fichero", blob);
*/
var request = new XMLHttpRequest();
request.open("POST", "http://jsonplaceholder.typicode.com/posts");
request.setRequestHeader('Content-Type', 'multipart/form-data');

request.onload = function() {
  console.log(xhr.status)
  // "201 --> Código de registro creado"
    if (request.readyState == 4 && request.status === 201) {
        //var respuesta = JSON.parse(xhr.responseText)
        //console.log("respuesta:", respuesta);
        //document.getElementById("resultado").innerHTML="Titulo: "+respuesta.title+", body: "+respuesta.body+", userId: "+respuesta.userId+", id remoto="+respuesta.id;
    }   
};
request.send(formData); 
*/

var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // number 123456 is immediately converted to string "123456"

// HTML file input user's choice...
formData.append("userfile", fileInputElement.files[0]);

// JavaScript file-like object...
var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
var blob = new Blob([content], { type: "text/xml"});

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);