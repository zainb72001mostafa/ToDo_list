const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const listRouter = require('./routes/listsRoutes');
const cors = require('cors');
require('dotenv').config();

const app =express();
//pares requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

//routes
app.use(listRouter);

//template engine
app.set('view engine','ejs');
app.set('views','views');//views folder where we find this template
app.use(express.static('public'));




var DB_URL=process.env.DB_URL;
mongoose.connect(DB_URL).then(result=>{
    app.listen('3555');
    console.log('Connected to MongoDB successfully');
}).catch(err => console.log(err));