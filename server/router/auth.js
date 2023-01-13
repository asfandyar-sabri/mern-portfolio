const express = require('express');
const router = express.Router();

require("../db/conn")
const user = require('../models/user')

router.get('/', (req, res) => {
    res.send("<h1>Hello from auth</h1>");
})

router.post('/register', (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword)
        return res.status(422).json({
            error: "Please fill all fields properly"
        })

    user.findOne({
        "email": email
    }).then((userExists) => {
        if(userExists){
            return res.status(422).json({
                error: "Please fill all fields properly"
            })
        }

        const User = new user({
            name, email, phone, work, password, cpassword
        })

        User.save().then(() => {
            res.status(201).json({
                "message": "User registered successfully"
            })
        }).catch((err) => res.status(500).json({
            "error": "Registration failed"
        })); 
            
    }).catch(err => {
        console.log("Error occured ", err)
    })

})

module.exports = router