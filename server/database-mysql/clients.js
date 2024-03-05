
const connection=require("./index.js")

module.exports.getAll=()=>{
    const sql ="select * from client"
    const result=connection.query(sql)
    return result
  }
  module.exports.add=(name,age,weight,coach_id)=>{
    const sql="insert into client (name,age,weight,coach_id) values (?,?,?,?)"
    const result=connection.query(sql,[name,age,weight,coach_id])
    return result 
  }
    module.exports.getOne=(id)=>{
      const sql= `select from client where id=${id}`
      return  connection.query(sql)
   }
   module.exports.delete=(id)=>{
    const sql= `delete from client where id=${id}`
    return connection.query(sql)
   }