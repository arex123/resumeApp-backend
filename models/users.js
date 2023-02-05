const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    type:{type:String}
})
const User = new mongoose.model("User",userSchema)
module.exports = User
