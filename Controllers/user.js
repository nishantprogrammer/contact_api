import mongoose from 'mongoose'
import {User} from '../Models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const Userregister = async(req,res)=>
{
    const {name,email,password}=req.body;
    if (name=="",email=="",password=="")
    {
        return res.json({message:"Invalid No Field Should Be Empty"})
    }
     let userid =await User.findOne({email})
    if(userid)
    {
        return res.json({message:"User Already Exists"})
    }
    const hashpassword =await  bcrypt.hash(password,10)
     userid =await User.create(
        {
            name,
            email,
            password:hashpassword
        }
    )
    res.json({message:"User Created Successfully",Success:true})

   
    


}
export const Userlogin = async (req,res)=>
{
    const {email,password}=req.body;
    let user =await User.findOne({email})
    if(!user)
    {
        return res.json({message:"User NOT Exist"})

    }
    const validpass = await bcrypt.compare(password,user.password)
    if(!validpass)
    {
        res.json({
            message:"Invalid Password"
        })
    }
    const token = jwt.sign({user:user._id},process.env.JWT,{expiresIn:'1d'})
    res.json({
        message:"Successfully Loggedin ",
        user:user,
        token
    })

}