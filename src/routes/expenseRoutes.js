const express = require('express');
const router = express.Router();
const Expense = require('../models/expenses_Model');
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
//update by ID
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



