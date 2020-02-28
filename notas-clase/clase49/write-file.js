//import fs from 'fs';
const fs = require('fs');

const data = "y esto... se guardará en el new-write-file.txt";
fs.writeFile('./files/new-write-file.txt', data, err => {
  if (!err) {
    console.log('Datos guardados en el archivo.txt');
  } else {
    throw err;
  }
});