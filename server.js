const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(express.json());
const expRoute = require('./src/routes/expenseRoutes');
const authRoute = require('./src/routes/authRoutes');
app.use('/exp', expRoute, authRoute);
// app.use('/exp', authRoute);

//models require goes here

//public dir for heroku. 
const publicDirectory = path.join(__dirname, "client/build");
app.use(express.static(publicDirectory));

// require('./src/db/mongoose');
require('./src/config/mongoose');
app.use(express.static('./src/public'));

const db = require("./src/models");
const Role = db.role;
initial();

if (process.env.NODE_ENV === "production") {  
  app.use(express.static(path.join(__dirname, '../build')));
}

function initial(){
  Role.estimatedDocumentCount((error, count)=>{
   if(!error && count === 0){
    new Role({name: "user"}).save(error =>{
     if(error){
      console.log('error', error)
     }
     console.log("added 'user' to roles collection");
    });
 
    new Role({name: "admin"}).save(error =>{
     if(error){
      console.log('error', error)
     }
     console.log("added 'admin' to roles collection");
    });
   }
  });
 }//initial

app.get('/',  (req, res) =>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
require('./src/routes/authRoutes')(app);
require('./src/routes/userRoutes')(app);

// app.get("/",  (req, res) =>{ res.send('hello from the server')});

const PORT = process.env.PORT || 3008;//this ,ust be the same as in the client package.json =>   "proxy":"http://localhost:3008/",
app.listen(PORT, () => {
  console.log(`Server is up and listening to PORT: ${PORT}`);
});
