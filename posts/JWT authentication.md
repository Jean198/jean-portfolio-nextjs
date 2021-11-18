---
title: 'JWT authentication with Node and Express js (tobe continued ...!)'
date: 'September 29, 2021'
excerpt: 'In this post I am sharing what I have learned about making authentication JWT authentication with Node, Express and Mongodb.'
cover_image: '/images/posts/jwt.png'
---

The **JSON Web Tokens(JWT)** is one way to make authentication in Node js.
\
\
 **Step1 :  Creating the user**.
\
\
Initialize Node js project with ***npm init*** and Install **express** with ***npm install express***.
\
\
Install **mongoose** and connect to your **mongodb** database.
\
\
Install **bcryptjs** packag.  This helps to store the user password in  an encrypted  format.
\
\
Install **jsonwebtoken**. This will help to create tokens for users.
\
\
Create a users.js file and import **bcryptjs** and  **jsonwebtoken** packages.
\
\
Create a user schema with **mongoose.Schema** along with the functions that generates Token and the function that findByCredentials for the login.
\
\
Inside the user.js also, create  a function that encrypt the user password, using the **bcrypt** package
\
\
Create the user out of the userSchema **const User = mongoose.model('User', userSchema)** and **module.exports = User**.
\
\
 **Step2 :  User login**.
\
\
Create the user login router.
\
\
Install the **cookie-parser** package and import it inside the app.js file




