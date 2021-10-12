//Authorization
const {authJwt} = require('../middleware');
const userController =require('../controllers/userController');
const express = require("express");
const app = express();

module.exports = function(app){
 app.use((req,res, next)=>{
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
 });

 console.log('userRoutes') 
 app.get('/exp/all', userController.allAccess);
 app.get('/exp/user', [authJwt.verifyToken], userController.userBoard);
 app.get('/exp/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);
};