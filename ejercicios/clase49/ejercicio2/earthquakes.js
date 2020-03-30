const http = require('https');

console.log('Hola node', process.argv);

var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';

/*
http.get({ host: url }, resOrigen => {
  http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(`La respuesta de ${url} es ${resOrigen.statusCode}` );
      console.log(`La respuesta de ${url} es ${resOrigen.statusCode}` );
  }).listen(process.env.PORT, process.env.IP);
  console.log(`Servidor disponible en http://${process.env.IP}:${process.env.PORT}/`);
}).on('error', e => {
  http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(`La respuesta de ${url} genera un error - ${e.message}`  );
  }).listen(process.env.PORT, process.env.IP);
  console.log(`Servidor disponible en http://${process.env.IP}:${process.env.PORT}/`);
  console.log(`Tenemos un error!! - ${e.message}`);
});

// console.log(process.argv)
// const eleccion = process.argv[2];

const getEarthquakes = () => {
  return new Promise((resolve, reject)=>{
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
      .then(data=>data.json())
      .then(json=>console.log(json));
      
  })
}
getEarthquakes();
*/
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
  .then(data=>data.json())
  .then(json=> console.log(json));