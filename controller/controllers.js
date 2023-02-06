const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/users')
const Student = require('../models/student_detail')
const multer = require('multer')
//staff and student login
exports.login = async function(req,res){
    const {email,password,type}=req.body
    console.log("email: "+email+" password: "+password+" type: "+type)

    let user = await User.findOne({email:email,password:password,type:type})
    if(user){

        console.log("user found")
        res.json({success:true})
        
    }else{
        console.log("user not found")
        res.json({success:false})

    }

}

//submit student detail
exports.student_detail_submit = async function(req,res){
    console.log("submitting student form")
    
    const {name,email,phone}=req.body
 
    let studentdata = await Student.findOne({email:email})
    if(studentdata){
        res.json({success:false,message:"Student with this email already has submitted the resume"})
    }else{
        console.log("req files"+JSON.stringify(req.files))
    const student = new Student({
        name:name,
        phone:phone,
        email:email,
        resume:req.files[0].filename
    })
    student.save( err =>{
        if(err){
            res.json({success:false,message:"Error while saving"})
        }else{
            res.json({success:true,message:"Form successfully submitted"})
        }
    })

}

}

//show list of student data
exports.student_list = async function(req,res){

    let list = await Student.find({})
    if(list){
        // console.log("list: "+list.length)
        res.json({success:true,list:list})
    }else{
        res.json({success:false})
    }

    
}

exports.getfile = function(req,res){
    console.log("get file method")
    let path = req.query.path
    // let url = req.protocol + "://" + req.get('host')+"/data/"+path+".pdf"
    // console.log('url '+url)
   try{
    res.download(__dirname+"/data/"+path)
   }catch(e){
    console.log("err")
    res.json({success:false})
   }

}