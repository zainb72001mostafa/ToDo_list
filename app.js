const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app =express();

app.use(bodyParser.json());

var DB_URL=process.env.DB_URL;
mongoose.connect(DB_URL).then(result=>{
    app.listen('3555');
    console.log('Connected to MongoDB successfully');
}).catch(err => console.log(err));