import express from 'express'
import {verifAuth} from"../middleware/Authverification"
import Usercontroller1 from '../controller/blogpostcontroller';
const Router = express.Router();
Router.post('/blogpost/create',verifAuth,Usercontroller1.blogpost);
Router.get('/blogpost/all',verifAuth,Usercontroller1.getAllBlog);
Router.get('/blogpost/one/:id',verifAuth,Usercontroller1.getOneBlog);
Router.delete('/blogpost/delete/:id',Usercontroller1.deleteOneBlog);
Router.patch('/blogpost/update/:id',verifAuth,Usercontroller1.upDate);
export default Router;