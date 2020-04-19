const express = require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const verify = require('./verifyToken')

//IMPORT MODELS
const Project = require ('../models/projects');
const User = require ('../models/User')


//VALIDATION
const Joi = require('@hapi/Joi');

//Registration VALIDATION
const regSchema = Joi.object({
    email: Joi.string().min(2).required().email(),
    password: Joi.string().min(5).required(),
    username: Joi.string().required()
});

//Login VALIDATION
const logSchema = Joi.object({
    email: Joi.string().min(2).required().email(),
    password: Joi.string().min(5).required(),
});



//register 
router.post('/register', async (req, res) =>{

    //Validate the data before posting to the db
    const {error} = regSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message)       //the error message we caught from validation error response
    
    //check if email exists
    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) return res.status(400).send('Email already exists')

    //check of username exists
    const usernameExist = await User.findOne({username: req.body.username});
    if (usernameExist) return res.status(400).send('Username already exists')

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    //create new user
   const user = new User({
       email: req.body.email,
       password: hashedPassword,
       username: req.body.username
   })

   const savedUser = await User.create(user);      //or await user.save(); 
   res.send(savedUser);

})



//login
router.post('/login', async (req, res)=>{

    //Validate the data before posting to the db
    const {error} = logSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    //check if the user is available in db
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Email is not found')
    
    //check valid password
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Invalid password')

    //create and assign token
    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({user: user.username, token: token})
    
})



//add a new project to the db
router.post('/create-project',verify, (req, res)=>{
    Project.create(req.body).then((project)=>{
        res.send (project)
        console.log(req.user);
    })
})

//get all projects from the db
router.get('/projects', (req, res) =>{
    Project.find({}).then((projects)=>{
        res.send(projects)
    })
})

//get project by id
router.get('/projects/:id', (req, res) =>{
    Project.findById({_id: req.params.id}).then(project =>{
        res.send(project)
    })
})


module.exports = router; 