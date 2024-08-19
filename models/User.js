import mongoose from "./index.js";
import {validateEmail} from '../common/validate.js'


const userSchema = new mongoose.Schema({
    email : {type:String, validate:validateEmail},
    password : {type:String},
    resetPasswordOtp : {type:String},
    resetPasswordExpires : {type:Date}
},
{
    versionKey:false
})

const userModel = mongoose.model("users", userSchema)

export default userModel