//Authentication
const {verifySignUp} = require('../middleware');
const authController = require('../controllers/authController');

const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

module.exports = function(app) {
  app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })

  // app.use(
  //     function(req, res, next) {
  //       res.header(
  //         "Access-Control-Allow-Headers",
  //         "x-access-token, Origin, Content-Type, Accept"
  //       );
  //       next();
  //     }
  // );

  app.post(
    "/exp/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    authController.signup
  );

  app.post("/exp/auth/signin", authController.signin);
};


// module.exports = function(app){
//  app.use(function(req, res, next){
//    res.header(
//      "Access-Control-Allow-Headers", 
//      "x-access-token, Origin, Content-Type, Accept" 
//    );
//   next();
//  })
 
//  app.post('/exp/auth/signup',
//   [
//    verifySignUp.checkDuplicateUsernameOrEmail,
//    verifySignUp.checkRolesExisted
//   ], 
//   authController.signup );

//  app.post('/exp/auth/signin', authController.signin);
// };