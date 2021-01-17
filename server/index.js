const express = require('express');
const { userInfo } = require('os');
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


//1) when user post to the sign in route, first, we need to get the data from req.body
//2) before we go, we need to check whether the user leave empty on the email or password field, if one of them is empty, then we need to return an error message
//3) if the input is not empty, then, we need to go to database and loop through the database and try to look for a matching email
//4) pass in the result into the callback function. If the return value is undefined, meaning the email is not registerd, return error message and prompt user to register
//5) if the result is a value, meaning we successfully found one user in the database
//6) after we found the value, we use bcrypt to check whether the password matched.
//7) we use .then and a callback function to take in the result from the bcrypt. if the return value is true, return the successfully login page
//8) else, return a password not match page and ask user to login again.
//


// app.post('/signin', (req,res)=>{
//     const { email, password } = req.body;
//     if( !email || !password ){
//         return res.status(422).json({ error : "please enter the both field!" })
//     }

//     User.findOne({ email: email })
//     .then((userExist) => {
//         if(!userExist){
//             return res.send("Invalid user!");
//         }

// //here, we need to check whether the object return by the user.findOne is undefined or not. If it is undefined, then we need to send error message to the front saying invalid email address
// //or account not signed up.
//         if(userExist.password === password){
//             return res.send("Successfully signed in!");
//         }
//         else{
//             return res.send("Invalid password");
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// })


app.get('/', custommMiddleware, (req,res) =>{
    console.log("This will print after middleware!");
    res.send("Hello world!");
})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})