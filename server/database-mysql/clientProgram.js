const connection=require("./index.js")
module.exports.getAll=()=>{
    const sql ="select * from clientProgram "
    const result=connection.query(sql)
    return result
  }
  module.exports.getOne=(id)=>{
    const sql ="select * from clientProgram where client_id=?"
    const result=connection.query(sql,[id])
    return result
  }
  module.exports.add=(type,client_id,intensity,duration,frequency)=>{
    const sql="insert into  clientProgram (type,client_id,intensity,duration,frequency) values (?,?,?,?,?)"
    const result=connection.query(sql,[type,client_id,intensity,duration,frequency])
    return result 
  }