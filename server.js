const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(express.json());
// const expRoute = require('./src/routes/expensemonth');
const expRoute = require('./src/routes/expenseRoutes');
app.use('/exp', expRoute);

//models require goes here

//public dir for heroku. 
const publicDirectory = path.join(__dirname, "client/build");
app.use(express.static(publicDirectory));

require('./src/db/mongoose'); 
app.use(express.static('./src/public'));

if (process.env.NODE_ENV === "production") {  
  app.use(express.static(path.join(__dirname, '../build')));
}
app.get("/",  (req, res) =>{
  res.sendFile(path.join(__dirname, "../build/index.html"));
});


// app.get("/",  (req, res) =>{ res.send('hello from the server')});


const PORT = process.env.PORT || 3008;//this ,ust be the same as in the client package.json =>   "proxy":"http://localhost:3008/",
app.listen(PORT, () => {
  console.log(`Server is up and listening to PORT: ${PORT}`);
});
