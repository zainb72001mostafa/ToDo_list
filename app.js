const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app =express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://zainb72001mostafa:Atlas1901582023@cluster0.k6qql0b.mongodb.net/').then(result=>{
    app.listen('3555');
    console.log('Connected to MongoDB successfully');
}).catch(err => console.log(err));