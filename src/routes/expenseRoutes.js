const express = require('express');
const router = express.Router();
const Expense = require('../models/expenses_Model');

//create new expense          //Create
router.post('/addExpense/',async (req, res)=>{
 // console.log('adding new expense, req.body:', req.body)
 const newExpense = await Expense(req.body);
 try{
  await newExpense.save();
  res.status(201).send(newExpense);
 }catch(error){
  console.log('could not create new expenses');
  res.status(400).send(error);
 }
});

//retrive a month expenses  //READ
router.get('/allExpenses/',async (req, res)=>{
 try{
  const allExpData = await Expense.find({});
  res.status(200).send(allExpData);
 }catch(error){
  console.log('could not fetch all Month expenses');
  res.status(400).send(error);
 }
});

//retrive by Month ID             //READ
//http://localhost:3000/exp/viewbymonth/5
router.get('/viewbymonth/:month',async (req, res)=>{
 try{
  console.log('month: ',req.params.month);
  const month = req.params.month;
  const allExpData = await Expense.find({});  
  const filteredData = allExpData.filter(byMonth=> {
   let m = byMonth.date.getMonth()+1;
    if(m == month){
     return byMonth;
    }else{
     console.log('the amount is: ',byMonth.amount)
    }
  });
  res.status(200).send(filteredData);
 }catch(error){
  console.log('Did not find that month :',req.params.month);
  res.status(400).send(error);
 }
});

/**[
  {
    '$project': {
      'date': {
        '$month': '$date'
      }
    }
  }, {
    '$match': {
      'date': 5
    }
  }
] */

//retrive by expense ID             //READ
router.get('/getExpenseByID/:id',async (req, res)=>{
 try{
  const expItem = await Expense.findById(req.params.id);
  res.status(200).send(expItem);
 }catch(error){
  console.log('Did not find expense with ID:',req.params.id);
  res.status(400).send(error);
 }
});

//update by  ID              //update
router.patch('/updateExpense/:id',async (req, res)=>{ 
 try{
  const exp1 = await Expense.findByIdAndUpdate(req.params.id, req.body); 
  console.log('55',req.params.id, req.body)
  if(!exp1){
   console.log('could not find that month')
   return res.status(404).send();
  }
  console.log('cool, updating something')
  // res.status(201).send(exp1);
  res.send(exp1);
 }catch(error){
  console.log('could not complete the update');
  res.status(400).send(error);
 }
});

//add expense to month by month ID
// router.post('/addExpense/:id',async (req, res)=>{ 
//  try{
//   const exp = await ExpenseMonth.findByIdAndUpdate(req.params.id, req.body); 
//   console.log('62 req.body: ', req.body)
//   if(!exp){
//    console.log('could not find that month')
//    return res.status(404).send();
//   }
//   console.log('cool, updating the month')
//   console.log('exp: ',exp,'exp.details: ',exp.details)
//   exp.details.push(req.body);
//   res.status(201).send(exp);
//   await exp.save();
//  }catch(error){
//   console.log('could not add expense');
//   res.status(400).send(error);
//  }
// });

//delete an expense by id
router.delete('/deleteExpense/:id',async (req, res)=>{
 try{
  // const expenseName = await Expense.findById(req.params.id);
  // console.log(expenseName.name, 'to be deleted')
  const expToDelete = await Expense.findByIdAndDelete(req.params.id);
  if(!expToDelete){
   return res.status(404).send();
  }
  console.log(expenseName.name, 'was deleted')
  res.status(200).send(expToDelete);
 }catch(error){
  console.log(`could not delete ${expenseName.name} because of error: ${error}`);
  res.status(400).send(error);
 }
});


module.exports = router;