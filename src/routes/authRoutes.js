//Authentication
const {verifySignUp} = require('../middleware');
const authController = require('../controllers/authController');

module.exports = function(app){
 app.use((req, res, next)=>{
  res.header(
   "Access-Control-Allow-Headers",
   "x-access-token, Origin, Content-Type, Accept"
  );
  next();
 })
 
//  app.post('/exp/auth/signup',
//   [
//    verifySignUp.checkDuplicateUsernameOrEmail,
//    verifySignUp.checkRolesExisted
//   ],  authController.signup );
//  app.post('/exp/auth/signin', authController.signin);
};