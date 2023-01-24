const jwt = require('jsonwebtoken');

const user = require('../models/user');

const authenticate = async (req ,res, next) => {
    
    console.log(req.cookies);

    try{
        const token = req.cookies.jwtToken;
        console.log("Token is: ", token);
        
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log("Verify Token: ", verifyToken)

        const rootUser = await user.findOne({
            _id: verifyToken._id,
            "tokens.token": token
        });

        if (!rootUser){
            throw new Error('User not found!')
        } else {
            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;
            next();
        }
    } catch(err) {
        res.status(401).send("Unauthorized: No token provided");
        console.log("Error in authenticate ", err);
    }
};

module.exports = authenticate;