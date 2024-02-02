const User = require("../models/user-model")

const home = (req, res) => {
  res.status(200).send("Welcome");
};

const register = async(req, res) => {
  try {
    const {username,email}=req.body;

    const userExist= await User.findOne({email})
    
    if(userExist){
      return res.status(400).json({msg:"email already Exist"})
    }
    await User.create({username,email});
    res.status(200).send("Welcome to registration");
    console.log(req.body)
    res.status(200).json({message:req.body});
  } catch (error) {
    res.status(500).json("internal server error")
  }
};

module.exports={home , register}