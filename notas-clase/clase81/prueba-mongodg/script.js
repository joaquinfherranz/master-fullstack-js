// https://www.w3schools.com/nodejs/nodejs_mongodb.asp


var MongoClient = require('mongodb').MongoClient;
/*
var url = "mongodb://localhost:27017/db1";

MongoClient.connect(url, { useUnifiedTopology: true },
 function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/

var url = "mongodb://localhost:27017/";
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    //db.close();
  });
});
*/
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
/*
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
  //  db.close();
  });
*/

/*
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    //db.close();
  });
*/
/*
dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    //db.close();
  });
*/
/*
dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
//  console.log(result[5]);
  db.close();
});

var query = { address: "Park Lane 38" };
dbo.collection("customers").find(query).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});

var query = { address: /^S/ };
dbo.collection("customers").find(query).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});

var mysort = { name: 1 };
dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});
*/
/*
var myquery = { address: 'Mountain 21' };
dbo.collection("customers").deleteOne(myquery, function(err, obj) {
  if (err) throw err;
  console.log("1 document deleted");
  db.close();
});
*/
/*
var myquery = { address: /^O/ };
dbo.collection("customers").deleteMany(myquery, function(err, obj) {
  if (err) throw err;
  console.log(obj.result.n + " document(s) deleted");
  db.close();
});
*/
/*
var myquery = { address: /^S/ };
var newvalues = {$set: {name: "Minnie"} };
dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
  if (err) throw err;
  console.log(res.result.nModified + " document(s) updated");
  db.close();
});
*/

dbo.collection("customers").find().limit(2).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});

});