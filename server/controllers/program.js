const programs=require("../database-mysql/program")
module.exports={
addProgram:(req,res)=>{
    programs.add(req.body.type,req.body.intensity,req.body.duration,req.body.frequency).then((list)=>{
        res.status(201).json(list)
    }).catch((err)=>{
      
        res.status(500).send(err)
    })
},
getAllProgram:(req,res)=>{
    programs.getAll().then((data)=>{
       res.json(data[0]) 
    }).catch((err)=>{
        res.status(500).send(err)
    })
},
getOneProgram:(req,res)=>{
    const id=req.params.id
   programs.getOne(id).then((program)=>{
        res.json(program[0])
    }).catch((err)=>{
        res.send(err)
    })
    }
}