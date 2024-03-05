const clientProgram=require("../database-mysql/clientProgram")
module.exports={
GetallProgram:(req,res)=>{
clientProgram.getAll().then((data)=>{
res.json(data[0])
}).catch((err)=>{
    res.status(500).send(err)
})
},
AddProgram:(req,res)=>{
    console.log(req.body)
    
clientProgram.add(req.body.type,req.body.client_id,req.body.intensity,req.body.duration,req.body.frequency).then((list)=>{
    res.status(201).json(list)
}).catch((err)=>{
    res.status(500).send(err)
})
},
getProgram:(req,res)=>{
    const id=req.params.id
    clientProgram.getOne(id).then((program)=>{
        res.json(program[0])
    }).catch((err)=>{
        res.send(err)
    })
    }




}