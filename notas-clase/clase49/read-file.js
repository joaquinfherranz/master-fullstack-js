//import fs from 'fs';
const fs = require('fs');

fs.readFile('./files/archivo.txt', 'utf8', (err, data) => {
    if (!err) {
      console.log(data);
    } else {
      throw err;
    }
});