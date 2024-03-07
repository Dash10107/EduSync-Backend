const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.secretKey;
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const verifyToken = require("../middlewares/Token");
const User = require("../models/User");
const Token = require("../models/Token");
const generateUniqueCode = require("../middlewares/UniqueCode");
const SendEmail = require("../middlewares/SendEmail");

router.post("/register",(req,res)=>{

    const {errors , isValid} = validateRegisterInput(req.body);

if(!isValid) return res.status(400).json(errors);

User.findOne({email:req.body.email})
.then(async(user)=>{
    if(user) return res.status(400).json({email:"Email already exists"});
    else{
        const newUser = new User ({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            isAdmin:req.body?.isAdmin,
            isSubAdmin:req.body?.isSubAdmin
        });
        bcrypt.genSalt(10,(err,salt) =>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err) throw err;

                newUser.password = hash;
                newUser.save()
                .then(user=>{console.log(user)})
                .catch(err=>console.log(err));

            });
        });

       

        const token = await new Token({
			userId: newUser._id,
			token: generateUniqueCode(),
		}).save();
		const url = `https://edusync.netlify.app/verifyemail/${newUser._id}/${token.token}`;
    const emailText = `Dear User,

    Thank you for registering with EDUSYNC! To ensure the security of your account, we need to verify your email address.
    
    Please follow the link below to complete the email verification process:
    
    Link : ${url}
    
    If you have trouble clicking the link, you can copy and paste it into your browser. If you did not sign up for EDUSYNC, please ignore this email.
    
    Thank you for choosing EDUSYNC. We look forward to having you as a valued member.
    
    Best regards,
    EDUSYNC Team`;
    
		await SendEmail(newUser.email, "Verify Email For Edusync", emailText);

		res
			.status(201)
			.send({ message: "An Email sent to your account please verify" });
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

    let userId = "";
    User.findOne({email})
    .then(async(user)=>{
        if(!user) return res.status(404).json({emailnotfound:"Email Not Found"});
        if (!user.verified) {
          userId = user._id;
			let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: generateUniqueCode(),
				}).save();
				const url = `http://localhost:3000/verifyemail/${userId}/${token.token}`;
				const info = await SendEmail(user.email, "Verify Email", url);
        console.log('Info',info);
                
            }

			return res
				.status(400)
				.send({ message: "An Email sent to your account please verify"});
		}
    
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
router.get("/protected", verifyToken, async (req, res) => {
    try {

        const user = req.user;
      // req.user now contains the decoded user information from the token
      const userId = req.user.id;
  
      // Find the user in MongoDB by their ID
      const userDb = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // You can use `user` to access all user properties
      res.json({ message: "Access granted", user,userDetails:userDb });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  router.get("/:id/verify/:token/", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });
        console.log(user)
        await User.updateOne(
            { _id: user._id },  // Find the user by ID
            { $set: { verified: true } }  // Set the 'verified' field to true
          );
            
          await Token.deleteOne({
            userId: user._id,
            token: req.params.token,
          })

		res.status(200).send({success:true, message: "Email verified successfully" });
	} catch (error) {
		res.status(500).send({success:false, message: "Internal Server Error",error:error });
	}
});

// Route to get user details based on ID
router.get('/user-details', verifyToken, async (req, res) => {
    try {
      // Retrieve user details based on the ID from req.user.id
      const user = await User.findById({_id:req.user.id});
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Send the user details in the response
      res.status(200).json({ User:user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  // Route to get user details based on ID
router.get('/user-details/:id', verifyToken, async (req, res) => {
  try {
    const {id} = req.params;

    // Retrieve user details based on the ID from req.user.id
    const user = await User.findById({_id:id});

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user details in the response
    res.status(200).json({ User:user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get user details based on IDs
router.post('/user-details', verifyToken, async (req, res) => {
  try {
    const { ids } = req.body;

    // Retrieve user details based on the array of IDs
    const users = await User.find({ _id: { $in: ids } });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'Users not found' });
    }
    const userObjects = users.map(user => ({ id: user.id, name: user.name }));
    // Send the user names in the response
    res.status(200).json({ users: userObjects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


  // GET route to fetch subadmin users' names and IDs
router.get('/subadminUsers',verifyToken, async (req, res) => {
  try {
    // Find all users with isSubAdmin set to true
    const subadminUsers = await User.find({ isSubAdmin: true }, '_id name');

    if (subadminUsers.length === 0) {
      return res.status(404).json({ message: 'No subadmin users found.' });
    }

    // Return the list of subadmin users' names and IDs
    res.status(200).json(subadminUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
  
module.exports=router;