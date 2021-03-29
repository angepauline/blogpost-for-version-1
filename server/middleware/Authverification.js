import { dataFromToken } from "../Helpers/Token";
import Usercontroller from"../controller/Authcontroller";
export const verifAuth=(req,res,next)=>{
    const token=req.header("x-auth-token");
    if(!token){
        return res.status(404).json({
            status: 404,
        message: "no token provided "
        })
    }
    try{
        //console.log(token)
        
    const user=dataFromToken(token).payload;
    const Users=Usercontroller.Users
    const data = Users.find(u => u.email === user.email);
    if(!data){
        res.status(404).json({
           statu:404,
           error:"you are not user" 
        })
    }
    req.body.Userid=data.id
    return next()

    }catch(e){
        res.status(404).json({
            statu:404,
            error:"token is not valid" 
         })

    }


}