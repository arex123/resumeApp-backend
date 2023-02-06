const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// const fileUpload = require('express-fileupload')
const dotenv = require('dotenv').config()
const multer = require('multer')
const path = require('path')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
// app.use(fileUpload());
console.log("12")
app.use(cors())

// app.use(express.static("./"))
// app.use(express.static("./data"))
// express.static('./data', { maxAge: '1d' }),

app.use(multer({ dest: __dirname + '/controller/data/' }).any())

mongoose.connect(process.env.mongoURL,{
     useNewUrlParser: true, useUnifiedTopology: true 
},(err)=>{
    if(err){
        console.log("14 err: "+err)
    }else
    console.log("your app is connected to database")
})




require('./route/routes')(app)

app.listen(5000,()=>{
    console.log("server started at port 5000")
})