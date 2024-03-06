const router = require('express').Router();
const {GetallProgram,AddProgram,getProgram,deleteOne}=require("../controllers/clientProgram")
router.get("/getAll",GetallProgram)
router.post("/add",AddProgram)
router.get("/:id",getProgram)
router.delete("/:id",deleteOne)





module.exports = router;