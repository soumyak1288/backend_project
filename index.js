const express = require('express')
const app = express()
require('dotenv').config()

const  port = 3000

app.get('/',(req,res)=>{
    res.send('<h1>Hello World!</h1>')
})

app.get('/login',(req,res)=>{
    res.send('<h1>welcome to the server</h1>')
})

app.get('/hack',(req,res)=>{
    res.send('<h1>hacking</h1>')
})



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
}
)