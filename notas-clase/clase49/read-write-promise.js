const fs = require('fs');

// Con Promesas!
function leerArchivo (nombre) {
	return new Promise((resolver, rechazar) => {
		fs.readFile(nombre, (error, contenido) => {
			console.log("Empezando la lectura de ", nombre);
			if(error){
				console.log("Error en la lectura");
				return rechazar(error);
			}
				console.log("Lectura finalizada en ", nombre);
				resolver(contenido);
		});
	});
}

function escribirArchivo (nombre, contenido){
	return new Promise((resolver, rechazar) => {
		fs.writeFile(nombre, contenido, error => {
			if(error){
				console.log("Error en la escritura de ", nombre);
				rechazar(error);
			} else {
				console.log("Escritura Termianda en ", nombre);
				resolver();
			}
		});
	});
}

//Opción1
leerArchivo("./files/Archivo.txt")
  .then(contenido => escribirArchivo("./files/copia.txt", contenido))
  .catch(error => {
    console.log("Promesas con errores: ");
    console.log(error);
  });