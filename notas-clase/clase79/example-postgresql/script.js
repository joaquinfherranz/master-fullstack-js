const { Client } = require('pg')

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '******',
  port: 5432,
}
const client = new Client(connectionData)

client.connect()
client.query('SELECT * FROM mytable')
    .then(response => {
        console.log(response.rows)
        //client.end()
    })
    .catch(err => {
        //client.end()
    })

    client.query('insert into mytable values ($1, $2)', [2,"hola"])
    .then(response => {
      console.log('insert')  
      console.log(response)
        //client.end()
    })
    .catch(err => {
        //client.end()
    })
