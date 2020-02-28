//import fs from 'fs';
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
//Opcion3
Promise.race([
	leerArchivo("./files/otros.txt"),
	leerArchivo("./files/usuarios.txt"),
	leerArchivo("./files/mas_cosas.txt")
	]).then(respuesta => {
		console.log(`El más rápido tiene solo ${respuesta.length} caracteres.`);
	});