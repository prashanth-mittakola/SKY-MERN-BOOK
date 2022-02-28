const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const routes = require('./routes/index');
const bodyParser = require('body-parser')
require('dotenv').config();

// ENV VARIABLES
const {PORT,MONGO_DB_URI} = process.env;

//CONNECTING TO DATABASE
mongoose.connect(MONGO_DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("::DB CONNECTED")
}).catch((err)=>console.log("::DB CONNECTION ERR",err));

// SERVER
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/",routes);
app.use("/api",apiRoutes);

//Middlewares
app.use(express.json());
app.use(cors());

app.listen(PORT || 8080, () => {
    console.log(`::PORT listening to http://localhost:${PORT}`);
})

