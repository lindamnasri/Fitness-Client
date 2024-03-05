const connection=require("./index.js")

module.exports.getAll=()=>{
    const sql ="select * from coach"
    const result=connection.query(sql)
    return result
  }

 module.exports.add=(name,email,password)=>{
    const sql="insert into coach (name,email,password) values (?,?,?)"
    const result=connection.query(sql,[name,email,password])
    return result 
  }