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

 app.post(
  '/api/auth/signup',
  [
   verifySignUp.checkDuplicateUsernameOrEmail,
   verifySignUp.checkRolesExisted
  ],
  controller.signup
 );
 app.post('/api/auth/signin', controller.signin);
};