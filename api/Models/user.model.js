import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    firstname:{
        type:String,
        required:true,
        unique:false,
    },
    lastname:{
        type:String,
        required:true,
        unique:false
    },
    dob:{
        type:String,
        required:true,
        unique:false,
    },
    password:{
        type:String,
        required:true,
        unique:false,
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
