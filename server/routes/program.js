const router = require('express').Router();


const {getAllProgram,addProgram,getOneProgram}= require("../controllers/program")

router.get("/getAll",getAllProgram)
router.get("/:id",getOneProgram)
router.post("/add",addProgram)
module.exports = router;