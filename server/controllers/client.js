const express=require("express")
const clients=require("../database-mysql/clients")
module.exports={
getAllClients:(req,res)=>{
clients.getAll().then((data)=>{
    res.json(data[0])
}).catch((err)=>{
    res.send(err)
})
},
getOneClient:(req,res)=>{
const id=req.params.id
clients.getOne(id).then((list)=>{
    res.json(list)
}).catch((err)=>{
    res.send(err)
})
},
addClient:(req,res)=>{
    console.log(req.body)
clients.add(req.body.name,req.body.age,req.body.weight,req.body.coach_id,req.body.program_id).then((list)=>{
    res.status(201).json(list)
}).catch((err)=>{
    console.log("errrrr")
    res.status(500).send(err)
})

},
deleteOne:(req,res)=>{
    const id=req.params.id
    clients.delete(id).then((list)=>{
        res.status(202).json(list)
    }).catch((err)=>{
        res.status(500).send(err)
    })

}


}









