const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')

// Register 
router.post('/register', async (req, res) => {
    try{
        // create salt using bcrypt and then hash password (await must be used because bcrypt is asyncronous)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // new user is added after to so that it can pass the hashed password instead of the orig
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // save user and return response 
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err)
    }
});

// Login 
router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send("user not found");

        // compare the request body password with whats in the database
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong password");

        return res.status(200).json(user)
    } catch(err){
        return res.status(500).json(err)
    }

})

module.exports = router
