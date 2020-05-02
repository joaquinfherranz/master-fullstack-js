var express = require('express');
var app = express();
var fs = require('fs');
var multer = require('multer');
var bodyParser = require('body-parser');
var lista_usuarios = require('./routes/lista_usuarios');


// Create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false });
//app.use('/process_post', urlencodedParser);
//app.use(urlencodedParser);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({dest:'./tmp/'}).any());

app.get("/", function(req,res){
  //res.end("Holamundo express");
  res.sendFile(__dirname + '/html/index.html')
});


app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
});

app.get('/process_get', function (req, res) {
  // Prepare output in JSON format
  response = {
  first_name:req.query.first_name,
  last_name:req.query.last_name
  };
  console.log(response);
  res.end("Datos recibidos:"+JSON.stringify(response));
 })

 //app.post('/process_post', urlencodedParser,function (req, res) {
 app.post('/process_post',function (req, res) {
  // Prepare output in JSON format
  response = {
  first_name:req.body.first_name,
  last_name:req.body.last_name
  };
  console.log(response);
  res.end("Datos recibidos:"+JSON.stringify(response));
 })

app.post('/file_upload', function (req, res) {
  console.log(req);
  console.log(req.files[0]);
  console.log(req.files[0].path);
  //console.log(req.files.file.type);
  
  var file = __dirname + "/" + req.files[0].originalname;
  fs.readFile( req.files[0].path, function (err, data) {
    fs.writeFile(file, data, function (err) {
      if( err ) {
        console.log( err );
      } else {
        response = {
          message:'File uploaded successfully',
          filename:req.files[0].originalname
        };
      }
      console.log( response );
      res.end( JSON.stringify( response ) );
    });
    // Borrar fichero temporal
    fs.unlink(req.files[0].path, (err)=>console.log(err));
  });
  
 })

 // app representa el servidor
app.use('/lista_usuarios', lista_usuarios);

var server = app.listen(3000, "localhost", ()=>{
  //console.log("Iniciando app en puerto 3000");
  var host = server.address().address
  var port = server.address().port
  
  //console.log("Example app listening at http://%s:%s", host, port)
  console.log(`Example app listening at http://${host}:${port}`)
});