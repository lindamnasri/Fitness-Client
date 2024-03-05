const router = require('express').Router();

const {getcoach,addcoach}=require("../controllers/coach")


router.get("/getAll",getcoach)
router.post("/add",addcoach)


module.exports = router;













module.exports = router;