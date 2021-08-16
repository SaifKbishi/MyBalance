const {authJwt} = require('../middleware');
const {verifySignUp} = require('../middleware');

const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/ExpenseController');
const authController = require('../controllers/authController');


router
.get('/allExpenses/', (req, res)=>{expenseController.allExpenses(req, res)})
.get('/viewbymonth/:month', (req, res)=>{expenseController.viewbymonth(req, res);})
.get('/getExpenseByID/:id', (req, res)=>{expenseController.getExpenseByID(req,res);})
.get('/charts/', (req, res)=>{expenseController.allExpenses(req, res)})
.post('/addExpense/',async (req, res)=>{expenseController.addExpense(req, res);})
.patch('/updateExpense/:id', (req, res)=>{expenseController.updateExpense(req, res);})
.delete('/deleteExpense/:id', (req, res)=>{expenseController.deleteExpense(req, res);})
.post('/auth/signin', authController.signin)
.post('/auth/signup', [verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExisted], authController.signup );

module.exports = router;



