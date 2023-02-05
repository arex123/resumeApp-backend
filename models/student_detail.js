const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name:{type:String},
    email:{type:String},    
    phone:{type:String},
    resume:{type:String},
    created_at:{type:Date,default:Date.now}
})
const Student = new mongoose.model("Student",studentSchema)
module.exports = Student
