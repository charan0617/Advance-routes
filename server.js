const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')


app.use(express.json()); // to prase json request

//routes prefixing

app.use('/api/users',userRoutes)
app.use('/api/products', productRoutes)

app.get('/',(req,res)=>{
    res.send('wellcome to the advance routing home page ')
})

app.listen(port,()=>{
    console.log(`server running in http://localhost ${port}`)
})
