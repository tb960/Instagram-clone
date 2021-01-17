const express = require('express');
const app = express();
const PORT = 5000;
//this port should be placed inside an env file which is also should be put inside .gitignore
//we should know how to require a module from the other files


const custommMiddleware = (req, res, next) =>{
    console.log('this is middleware');
    next();
}
//this is one of an example to write a middleware function. A middleware function is a function that can manipulate req and res before sending it back to the web client side

//now we will want to add mongodb database 

//then to access the content of the body passes back to our server through client, we need to use express.json or body-Parser, but body-Parser is used more commonly.

// const person = ['john'];

// const [fName, lName ] = person;

// console.log(fName);
// console.log(lName);

//in javascript destructuring, if we try to access second argument which is not inside the array, (destructre second elements which is not inside the array..)
//we will not get an error. We will only get an undefined message if we try to access it.




app.get('/', custommMiddleware, (req,res) =>{
    console.log("This will print after middleware!");
    res.send("Hello world!");
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})