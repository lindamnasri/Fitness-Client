const connection=require("./index.js")
module.exports.getAll=()=>{
    const sql ="select * from program"
    const result=connection.query(sql)
    return result
  }
 
module.exports.add=(type,intensity,duration,frequency)=>{
    const sql="insert into program (type,intensity,duration,frequency) values (?,?,?,?)"
    const result=connection.query(sql,[type,intensity,duration,frequency])
    return result 
  }
  
  module.exports.getOne=(id)=>{
    const sql= `select * from program where id=${id}`
    return  connection.query(sql)
 }