const jwt=require('jsonwebtoken');
const { JWT_TOKEN } = require('./config');
const authMiddleware=(req,res,next)=>{
    const authHead=req.headers.authorization;
    if(!authHead || !authHead.startsWith('Bearer '))
    {
        return res.status(403).json({msg:"Wrong auth"});
    }
    const token=authHead.split(' ')[1];
    try{
        decoded=jwt.verify(token,JWT_TOKEN);
        req.userId=decoded.username;
        next();
    }
    catch(err)
    {
        res.status(403).json({msg:"Wrong auth"});
    }
}
module.exports=authMiddleware