import mongoose from "mongoose"
import validator  from "validator"
const schema=new mongoose.Schema({
_id:{
    type:String,
    required:[true,"user id is required"]
},
name:{
    type:String,
    required:[true,"user name is required"]
},
email:{
    type:String,
    required:[true,"user email is required"],
    unique:[true,"email exists"],
    validate:[validator.default.isEmail,"email not valid"]

},
photo:{
    type:String,
    required:[true,"user photo is required"]
},
role:{
    type:String,
    enum:["user","admin"],
    default:"user"
},
gender:{
    type:String,
    enum:["male","female"],
    required:[true,"user gender is required"]
},
dob:{
    type:Date,
    required:[true,"user date of birth is required"]
}


},{timestamps:true})


export const User=mongoose.model("User",schema)