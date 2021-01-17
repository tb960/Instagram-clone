const express = require('express');
const app = express();
const PORT = 5000;

const custommMiddleware = (req, res, next) =>{
    console.log('this is middleware');
    next();
}


app.get('/', custommMiddleware, (req,res) =>{
    console.log("This will print after middleware!");
    res.send("Hello world!");
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})