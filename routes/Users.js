const express = require('express')
const route = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

let User = require('../models/User')

route.use(cors())

route.post('/register', (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({
        email: req.body.email
    })
     .then(user => {
         if(!user) {
             bcrypt.hash(req.body.password, 10, (err, hash) => {
                 userData.password = hash
                 User.create(userData)
                  .then(user => res.json(user.email + ' is registered!'))
                  .catch(err => res.status(400).json('error: ' + err))
             })
         }else{
             res.json({error: 'User already exists!'})
         }
     })
     .catch(err => {
         res.status(400).json('error: ' + err)
     })
})

route.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
     .then(user => {
         if(user) {
             if(bcrypt.compareSync(req.body.password, user.password)) {
                 const payload = {
                     id: user._id,
                     email: user.email
                 }
                 res.json({
                     success: true
                 })
             }else{
                 res.json({
                     success: false,
                     error: "Wrong password"
                    })
             }
         }else{
             res.json({
                 success: false,
                 error: "User does not exist"
            })
         }
     })
     .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = route