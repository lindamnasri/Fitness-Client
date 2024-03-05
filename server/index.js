const express = require("express");


// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
// const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000
const cors =require('cors')
const programRoute=require("./routes/program")
const clientRoute=require("./routes/client")
const coachRoute=require("./routes/coach")

app.use(cors())
app.use(express.json());
app.use('/api/client',clientRoute)
app.use('/api/coach',coachRoute)
app.use('/api/program',programRoute)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
