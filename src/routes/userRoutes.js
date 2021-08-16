//Authorization
const {authJwt} = require('../middleware');
const userController =require('../controllers/userController');

module.exports = function(app){
 app.use((req,res, next)=>{
  res.header("Access-Control-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
  next();
 });
 // app.get('/api/all', controller.allAccess);
 // app.get('/api/test/all', controller.allAccess);
 // app.get('/api/test/user', [authJwt.verifyToken], controller.userBoard);
 // app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

 app.get('/exp/all', userController.allAccess);
 app.get('/exp/user', [authJwt.verifyToken], userController.userBoard);
 app.get('/exp/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);
};