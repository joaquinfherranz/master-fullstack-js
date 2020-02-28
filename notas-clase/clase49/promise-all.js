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

//Opción2
Promise.all([
	leerArchivo("./files/otros.txt"),
	leerArchivo("./files/usuarios.txt"),
	leerArchivo("./files/mas_cosas.txt")
	]).then(respuestas => {
		console.log(`Tenemos un total de ${respuestas.length} respuesta/s.`);
		console.log(`El primero tiene ${respuestas[0].length} caracteres`);
		console.log(`El segundo tiene ${respuestas[1].length} caracteres`);
		console.log(`El tercero tiene ${respuestas[2].length} caracteres`);
	});