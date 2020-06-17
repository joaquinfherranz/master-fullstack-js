const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user:'root',
  password: '',
  connectionLimit: 5,
  database: 'ejemplo'
});
console.log('1');
async function asyncFunction() {
  let conn;
  try {
    console.log('2');
	conn = await pool.getConnection();
  
  const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
	//const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	//console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  const res0 = await conn.query("drop table mytable");
  console.log(res0);

  const res1 = await conn.query("create table mytable (id int, name varchar(255))");
  console.log(res1);
  
  const res2 = await conn.query("insert into mytable value (?, ?)", [2,"mariadb"]);
  console.log(res2);

  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

asyncFunction();

