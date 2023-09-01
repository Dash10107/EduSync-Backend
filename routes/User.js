const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.secretKey;
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const verifyToken = require("../middlewares/Token");
const User = require("../models/User");

router.post("/register",(req,res)=>{

    const {errors , isValid} = validateRegisterInput(req.body);

if(!isValid) return res.status(400).json(errors);

User.findOne({email:req.body.email})
.then((user)=>{
    if(user) return res.status(400).json({email:"Email already exists"});
    else{
        const newUser = new User ({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        bcrypt.genSalt(10,(err,salt) =>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err) throw err;

                newUser.password = hash;
                newUser.save()
                .then(user=>{res.json(user);console.log(user)})
                .catch(err=>console.log(err));

            });
        });
    }
});

});

router.post("/login",(req,res)=>{
    const {errors,isValid} = validateLoginInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;


    User.findOne({email})
    .then(user=>{
        if(!user) return res.status(404).json({emailnotfound:"Email Not Found"});
    
        bcrypt.compare(password,user.password)
        .then(isMatch=>{
            if(isMatch){
                //success
            const payload = {
                id : user.id,
                name: user.name
            };
            jwt.sign(payload,secret,{
                expiresIn:31556926
            },(err,token)=>{
                res.json({success:true,
                token:"Bearer " + token
                });
            })
            }else{
                return res.status(400).json({passwordincorrect:"Password Incorrect"});

            }
        });
    });
});

// Test route that requires authentication
router.get("/protected", verifyToken, (req, res) => {
    // req.user now contains the decoded user information from the token
    const user = req.user;
  
    // You can use `user` to access user properties, such as name or ID, as needed
    res.json({ message: "Access granted", user });
  });

module.exports=router;