//Authentication
const {verifySignUp} = require('../middleware');
const controller = require('../controllers/authController');

module.exports = function(app){
 app.use((req, res, next)=>{
  res.header(
   "Access-Control-Allow-Headers",
   "x-access-token, Origin, Content-Type, Accept"
  );
  next();
 })
 
 app.post('/exp/auth/signup', 
  [
   verifySignUp.checkDuplicateUsernameOrEmail,
   verifySignUp.checkRolesExisted
  ],  controller.signup );
 app.post('/exp/auth/signin', controller.signin);
};