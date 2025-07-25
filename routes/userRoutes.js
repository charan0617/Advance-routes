const express = require('express')
const router = express.Router()

//middleware specific to user router

router.use((req,res,next)=>{
console.log(`{user route}, ${req.method} ${req.originalUrl}`)
next()
})

//get /api/users

router.get('/',(req,res)=>{
    res.json([{id: 1, name: 'ramesh'},{id: 2, name: 'dinesh'}])
})

// get /api/users/:id

router.get('/:id',(req,res)=>{
    const userId = req.params.id
    res.json({id: userId, name: 'user' + userId})
})

//post /api/users

router.post('/',(req,res)=>{
    const newUser = req.body
    res.status(201).json({message:'user created',user: newUser})
})


module.exports = router;