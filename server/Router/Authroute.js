import express from 'express'
import Usercontroller from '../controller/Authcontroller';
const Router = express.Router();
Router.post('/Auth/signup',Usercontroller.Usercontroller.signup);
Router.post('/Auth/signin',Usercontroller.Usercontroller.signin);
export default Router;
