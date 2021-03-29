import express from "express";
import bodyparse from "body-parser";
import Authroute from './server/Router/Authroute';
import blogpostAuthroute from'./server/Router/blogpostAuthroute'
import dotenv from"dotenv";

dotenv.config({
    path:"./.env"
})
const app=express();
app.use(bodyparse.json());
app.use('/api/v1/blogpost',Authroute);
app.use('/api/v1/blogpost',blogpostAuthroute);


app.use('/',(req,res) => {
    res.status(200).send({
        statu:(200),
        message:"this is a blogpost API"


    })
})
const port=process.env.PORT
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})

export default app;