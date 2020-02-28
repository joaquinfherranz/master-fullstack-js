//import fs from 'fs';
const fs = require('fs');

// Con CallBacks!
fs.readFile("./files/archivo.txt", (error, content) => {
	console.log("Leyendo el archivo...");
	fs.writeFile("./files/longitud.txt", content.length, error => {
	    if (error) {
	        console.log("error! ", error);
	    } else {
		    console.log("Terminado... hemos almacenado una cadena que vale ",content.length);
	    }
	});
});

console.log('Vamos');