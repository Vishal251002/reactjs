const mongoose =new require("mongoose");

const userSchema =new mongoose.Schema({
    username :{
        type : String,
        require :true,
    },
    // birthdate :{
    //     type : String,
    //     require :true,
    // },
    email:{
        type : String,
        require :true,
    },
    // password :{
    //     type : String,
    //     require :true,
    // },
    // Gender :{
    //     type : String,
    //     require :true,
    // },
    // address :{
    //     type : String,
    //     require :true,
    // },
    // number :{
    //     type : String,
    //     require :true,
    // }

})

const User =new mongoose.model("User",userSchema);

module.exports=User;