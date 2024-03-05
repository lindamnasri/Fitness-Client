const coach=require("../database-mysql/coach")
module.exports={
    getcoach:(req,res)=>{
        coach.getAll().then((data)=>{
            res.json(data[0])
        }).catch((err)=>{
            res.send(err)
        })
        },
addcoach:(req,res)=>{
    
coach.add(req.body.name,req.body.email,req.body.password).then((list)=>{
res.status(201).json(list)
}).catch((err)=>{
    res.status(500).send(err)
})
}
}
