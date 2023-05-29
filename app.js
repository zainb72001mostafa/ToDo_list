const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const listRoute = require('./routes/listsRoutes');
require('dotenv').config();

const app =express();

app.set('view engine','ejs');
app.set('views','views');//views folder where we find this template
app.use(express.static('public'));
app.use(bodyParser.json());



var DB_URL=process.env.DB_URL;
mongoose.connect(DB_URL).then(result=>{
    app.listen('3555');
    console.log('Connected to MongoDB successfully');
}).catch(err => console.log(err));