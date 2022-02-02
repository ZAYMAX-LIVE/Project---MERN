const {Router} = require('express')
const router = Router()
const User = require('./models/User')
const bcrypt = require('bcryptjs')
const config = require('config')
//const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const user = require('../models/user')


//auth/register
router.post('/register', async (req, res)=>{
    try{
        const {name, password} = req.body
        const candidate = await User.findOne({name}) //поиск есть ли имя в бд
        if(candidate){
            return res.status(400).json({message: 'User name error'})
        }
        const hashedPass = await bcrypt.hash(password, 12) //хеширование пароля
        const user = new User({name, password: hashedPass})

        await user.save()
        res.status(201).json({message: 'User yes'})
    }
    catch{
        res.status(500).json({message: "No no no..."})
    }
})
//auth/login
router.post('/login', async (req, res)=>{
    try{
        const {name, password} = req.body
        const candidate = await User.findOne({name})
        if(!candidate){
            return res.status(400).json({message: 'User no account'})
        }
        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword){
            return res.status(400).json({message: 'Password no'})
        }
        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'} //на сколько времени даеться токен
        )
        res.json({token, userId: user.id})
    }
    catch{
        res.status(500).json({message: "No no no..."})
    }
})


module.exports = router