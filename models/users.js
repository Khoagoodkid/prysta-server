const mongoose = require("mongoose")

const Schema = mongoose.Schema
const UserSchema = new Schema({
    username:String,
    password:String,
    // userId:String
 
})
module.exports = mongoose.model("users", UserSchema)