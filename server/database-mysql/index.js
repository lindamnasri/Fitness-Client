const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'fitness'
}).promise()

connection.connect().then(()=>{
  console.log('database connected!')
}).catch((err)=>{
  console.log("not connected!")
})

module.exports=connection
