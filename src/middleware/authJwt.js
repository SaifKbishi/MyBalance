const jwt = require("jsonwebtoken");
const config = require("../config/authConfig.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next)=>{
 let token = req.headers['x-access-token'];

 if(!token){
  return res.status(403).send({message: 'no token provided!'});
 }
 jwt.verify(token, config.secret, (error, decoded)=>{
  if(error){
   return res.status(401).send({message: "Unauthorized!"});
  }
  req.userId = decoded.id;
  next();
 })
};//verifyToken

isAdmin = (req, res, next)=>{
 User.findById(req.userId).exec((error, user)=>{
  if(error){
   res.status(500).send({message: error});
   return;
  }

  Role.find(
   {
   _id:{$in:user.roles}
  },(error, roles)=>{
   if(error){
    res.status(500).send({message: error});
    return;
   }
   for(let i=0; i<roles.length; i++){
    if(roles[i].name === "admin"){
     next();
     return;
    }
   }

   res.status(403).send({message: 'Require Admin Role!'});
   return;
  }
   );

 })
};//isAdmin

const authJwt = {
 verifyToken,
 isAdmin,
};
module.exports = authJwt;