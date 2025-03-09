const express=require('express');
const userRouter=express.Router();
const {User, Account}=require('../db/index')
const authMiddleware=require('../middleware')
const z=require('zod');
const jwt=require('jsonwebtoken');
const { JWT_TOKEN } = require('../config');
const signupSchema=z.object({
    username:z.string().email(),
    password:z.string(),
    firstName:z.string(),
    lastName:z.string()
})
const signInSchema=z.object({
    username:z.string().email(),
    password:z.string()
})
const updateDetails=z.object(
    {
        firstName:z.string().optional(),
        lastName:z.string().optional(),
        password:z.string().optional()
    }
)
userRouter.post("/signup",async (req,res)=>{
    const body=req.body;
    const {success}=signupSchema.safeParse(body);
    const userExists=await User.findOne({username:body.username});
    if(!success || userExists)
    {
        return res.json({msg:"Email already taken or incorrect inputs"});
    }
    const user=await User.create(body);
    const id=user._id;
    await Account.create({userId:id,balance:1+Math.random()*1000});
    const token=jwt.sign({
        username:user._id
    },JWT_TOKEN)
    res.json({
        msg:"User created successfully",
        token:token
    })

})
userRouter.post("/signin",async(req,res)=>{
    const body=req.body;
    const {success}=signInSchema.safeParse(body);
    if(!success)
    {
        return res.json({msg:"Incorrect inputs"});
    }
    const user=await User.findOne(body);
    if(user)
    {
        const token=jwt.sign({username:user._id},JWT_TOKEN);
        res.json({token:token});
        return ;
    }
    res.json({msg:"Error while signing up"});

})
userRouter.put("/",authMiddleware,async (req,res)=>{
    const body=req.body;
    const {success}=updateDetails.safeParse(body);
    if(!success)
    {
        return res.json({msg:"Cannot update details"});
    }
    await User.updateOne({_id:req.userId},body);
    res.json({msg:"Details Updated successfully"});
})
userRouter.get("/bulk",async(req,res)=>{
    const filter =req.query.filter;
    const users=await User.find({
        "$or":[{
            firstName:{
                "$regex":filter
            }
        },
        {
            lastName:{
                "$regex":filter
            }
        }
    ]
    })
    res.json({users:users.map(user=>({
        username:user.username,
        firstName:user.firstName,
        lastName:user.lastName,
        _id:user._id
    }))})
})
module.exports=userRouter;
