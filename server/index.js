require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const morgan = require("morgan");

const app = express();

var initialRoute = express.Router()

initialRoute.get('/', function(req, res) {
    res.json(`Welcome to server listening on port: ${process.env.PORT}`)
})

app.use(express.json());
app.use(bodyParser.urlencoded({ extends : false }));
app.use(bodyParser.json({ type: 'application/json' }))
app.use(cors());
app.use(morgan("dev"));

//initialRoute
app.use('/', initialRoute)

mongoose
    .connect(process.env.DATABASE)
    .then(()=> console.log("DB connected"))
    .catch((err) => console.log("DB CONNECTION ERROR: ", err));
    
// Models
require('./models/entryModel');

//Routes
app.use('/api/v1', require('./routes'));

app.listen(process.env.PORT, () => console.log("Server is running on port ", process.env.PORT));