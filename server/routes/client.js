const router = require('express').Router();

const {getAllClients, addClient, getOneClient,deleteOne}=require("../controllers/client")

router.get("/getAll",getAllClients)
router.get("/:id",getOneClient)
router.post("/add",addClient)

router.delete("/:id",deleteOne)

module.exports = router;
