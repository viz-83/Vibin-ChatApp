import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try{
        const {fullName,userName,password,confirmPassword,gender} = req.body;

        if(password!==confirmPassword){
           return res.status(400).json({error:"Password do not match"});
        }

        const user=await User.findOne({userName})
        if(user){
            return res.status(400).json({error:"User already exists"});
        }
        // Hash Password
        const salt= await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        //https://avatar-placehoder.iran.liara.run/avatar/200/200/any
        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser= new User({
            fullName,
            userName,
            password:hashedPassword,
            gender,
            profilePic:gender==="male"?boyProfilePic:girlProfilePic
        })

    if(newUser){
        //Generate JWT Token
        generateTokenAndCookie(newUser._id,res);
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic
        });
    }else{
        res.status(400).json({error:"Invalid User Data"});
    }

    }catch(error){
        res.status(500).json({error:"Server Error"});
        console.log("Error in signup controller", error);

    }
        
    }

export const login = async(req, res) => {
    try{
        const {userName,password}=req.body;
        const user=await User.findOne({userName})
        const isPasswordCorrect=await bcrypt.compare(password,user?.password || "");


        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid Credentials"});
        }

        generateTokenAndCookie(user._id,res);

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            userName:user.userName,
            profilePic:user.profilePic
        });

    }catch(error){
        res.status(500).json({error:"Server Error"});
        console.log("Error in login controller", error);
    }
}

export const logout = (req, res) => {
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged Out Successfully"});
    }catch(err){
        res.status(500).json({error:"Server Error"});
        console.log("Error in logout controller", err);
    }
}
