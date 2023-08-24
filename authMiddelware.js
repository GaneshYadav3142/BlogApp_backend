const jwt=require("jsonwebtoken")


const authMiddelware=async (req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
    try {
        const decode=jwt.verify(token,"Secret")
        console.log(decode)
        if(decode){
            req.body.userID=decode.userID
            req.body.username=decode.username
            next()
        }
        else{
            res.json("Not Authorized")
        }
        
    } catch (error) {
        res.json({error:"error111"})
    }
}
else{
    res.json({msg:"Please Login"})
}
}



module.exports=authMiddelware