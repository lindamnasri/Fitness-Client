const router = require('express').Router();
const {GetallProgram,AddProgram,getProgram}=require("../controllers/clientProgram")
router.get("/getAll",GetallProgram)
router.post("/add",AddProgram)
router.get("/:id",getProgram)







module.exports = router;