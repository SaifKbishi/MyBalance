const Expense = require('../models/expenses_Model');

exports.allAccess = async (req, res) => {
   res.status(200).send("Public Content. controllers/userController");

//  try{
//   const allExpData = await Expense.find({});
//   res.status(200).send(allExpData);
//  }catch(error){
//   console.log('could not fetch all Month expenses');
//   res.status(400).send(error);
//  }
 // res.status(200).send("Public Content. controllers/userController");
};

exports.userBoard = (req, res) => {
 res.status(200).send("User Content. controllers/userController");
};

exports.adminBoard = (req, res) => {
 res.status(200).send("Admin dashboard. here you can modify Table  colors. <br/> ");
};
