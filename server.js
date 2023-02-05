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

app.use(cors())
app.use(express.static("files"))

// var storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'uploads/')
//     },
//     filename:function(req,file,cb){
//         let ext = path.extname(file.originalname)
//         cb(null,Date.now()+ext)
//     }
// })

// app.use(multer({
//     destination:function(req,file,cb){
//         cb(null,'./uploads')
//     },
//     filename:function(req,file,cb){
//         let ext = path.extname(file.originalname)
//         cb(null,Date.now()+ext)
//     }
// }).any())
// app.use(multer({dest:'./uploads'}).any());
app.use(multer({ dest: __dirname + '/data/' }).any())

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