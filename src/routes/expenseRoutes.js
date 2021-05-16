const {authJwt} = require('../middleware');

const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/ExpenseController');


//create new expense
router.post('/addExpense/',async (req, res)=>{
 expenseController.addExpense(req, res);
});
//retrive a month expenses
router.get('/allExpenses/', (req, res)=>{
 expenseController.allExpenses(req, res)
});

router.get('/viewbymonth/:month', (req, res)=>{ 
 expenseController.viewbymonth(req, res);
});

// app.get('/exp/user', [authJwt.verifyToken], controller.userBoard);
//update by ID

//20210515 1717
// router.patch('/updateExpense/:id', [authJwt.verifyToken], (req, res)=>{ expenseController.updateExpense(req, res);});
router.patch('/updateExpense/:id', (req, res)=>{ 
 expenseController.updateExpense(req, res);
});
//delete an expense by id
router.delete('/deleteExpense/:id', (req, res)=>{
 expenseController.deleteExpense(req, res);
});

//retrive by expense ID
router.get('/getExpenseByID/:id', (req, res)=>{
 expenseController.getExpenseByID(req,res);
});

module.exports = router;



