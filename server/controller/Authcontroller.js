import { generateAuthToken } from "../Helpers/Token";
import Userdata from "../model/Usermodel";
import bcrypt from 'bcrypt'
const Users = [];
class Usercontroller {
    static signup = (req, res) => {
        const id = Users.length + 1;
        let {
            firstname,
            lastname,email,
            gender,
            role,
            department,
            address,
            password
        } = req.body;
        password=bcrypt.hashSync(password,12);

        const isemailexist = Users.find((User) => User.email === email);
        

        if (isemailexist) {
            return res.status(409).json({
                statu: 409,
                error: "email is duplicated",
            })
        }
        const User = new Userdata(id, firstname, lastname, email, gender, role, department, address,password);

        Users.push(User);
        const data = Users.find(User => (User.email === email));
        if (!data) {
            return res.status(417).json({
                status: 417,
                message: "signup failed"

            })
        }
        else{
           let{password,...datawithoutpassword}=data; 
        return res.status(201).json({
            status: 201,
            message: "account created succefullly",
           data:datawithoutpassword

        })

        }
       
    }
    static signin = (req, res) => {
        let{
            email,
            password
        }=req.body;
        const isUserexist=Users.find (User=>(User.email===email));
        const ispasswordexist=bcrypt.compare(password,isUserexist.password)
        
        if(isUserexist&&ispasswordexist){
            
            const data=isUserexist
            const token =generateAuthToken({
                id:data.id,
                email:data.email,
                role:data.role
    
            });
          
        let{password,...datawithoutpassword}=data;
        return res.status(200).json({
            
            status: 200,
            message: "login sucessfully",
            token:token,
            data:datawithoutpassword
        })
    
        }
        return res.status(404).json({
            status :404,
            message:"user password incorrect"

        })
    }
    


}
export default {Usercontroller,Users}
