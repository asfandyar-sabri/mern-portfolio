const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require("../db/conn")
const user = require('../models/user')

router.get('/', (req, res) => {
    res.send("<h1>Hello from auth</h1>");
})


// promises
// router.post('/register', async (req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword)
//         return res.status(422).json({
//             error: "Please fill all fields properly"
//         })

//     user.findOne({
//         "email": email
//     }).then((userExists) => {
//         if(userExists){
//             return res.status(422).json({
//                 error: "Please fill all fields properly"
//             })
//         }

//         const User = new user({
//             name, email, phone, work, password, cpassword
//         })

//         User.save().then(() => {
//             res.status(201).json({
//                 "message": "User registered successfully"
//             })
//         }).catch((err) => res.status(500).json({
//             "error": "Registration failed"
//         })); 
            
//     }).catch(err => {
//         console.log("Error occured ", err)
//     })

// })

// async-await

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;
    console.log("Data coming is: \n", req.body)

    if(!name || !email || !phone || !work || !password || !cpassword)
        return res.status(422).json({
            error: "Please fill all fields properly"
    })

    try{
        const userExists = await user.findOne({
            "email": email
        })

        if(userExists) {
            return res.status(422).json({
                error: "Email already exists"
            })
        } else if (password !== cpassword) {
            return res.status(422).json({
                error: "Passwords do not match"
            })
        } else {
            const User = new user({
                name, email, phone, work, password, cpassword
            });
        
            await User.save()
    
            res.status(201).json({
                message: "User registered successfully"
            })
        }        
    } catch(err) {
        console.log("Error occured", err)
    }
})

router.post('/signin', async (req, res) => {

    let token;

    try{
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({
                error: "Kindly enter credentials"
            })
        }

        const userLogin = await user.findOne({
            "email": email
        })

        if (userLogin) {
            const verifyPassword = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log("Token is: ", token)

            res.cookie("jwtToken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!verifyPassword) {
                res.status(400).json({
                    error: "Invalid credentials"
            })
            } else {
                res.status(200).json({
                    "message": "User logged in successfully"
            })
            } 
        } else {
            res.status(400).json({
                error: "Invalid credentials"
            });
        }
    } catch (err){
        console.log("Error occured while logging in ", err)
    }
});

module.exports = router