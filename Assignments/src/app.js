const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const port=3500;

require ('./db/conn')
const Register = require('./models/register.hbs')

const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path))

app.get('/', (req, res)=> {
    res.send('Home Page')
})

app.listen(port, ()=> {
    console.log('server is running')
})