var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

(async () => {

  let client = await MongoClient.connect(url, {
       useNewUrlParser: true,
       useUnifiedTopology: true 
      });

  let db = client.db('db1');

  try {
     
     // find
     let res = await db.collection("customers").find({}).limit(5).toArray();
     console.log(JSON.stringify(res));
     //console.log(`res => ${JSON.stringify(res)}`);

     var myquery = { address: /^S/ };
     var newvalues = {$set: {name: "Mateo"} };
     res = await db.collection("customers").updateMany(myquery, newvalues);
     console.log("Numero de cambios: "+ res.result.nModified );

  } catch(err){
    console.log(err)
  }
  finally {
      client.close();
  }
})()
  .catch(err => console.error(err));