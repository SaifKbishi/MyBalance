const express = require('express');
const router = express.Router();
const ExpenseMonth = require('../models/expenseModel');
// const Expense = require('../models/expenses');


//retrive a month expenses  //READ
router.get('/allmonthes/',async (req, res)=>{
 try{
  const allExpData = await ExpenseMonth.find({});
  res.status(200).send(allExpData);
 }catch(error){
  console.log('could not fetch all Month expenses');
  res.status(400).send(error);
 }
}).get('/monthview/:id',async (req, res)=>{
  try{
   const month = await ExpenseMonth.findById(req.params.id);
   res.status(200).send(month);
  }catch(error){
   console.log('Did not find that month with ID:',req.params.id);
   res.status(400).send(error);
  }
 });

//retrive by Month             //READ
// .get('/monthview/:id',async (req, res)=>{
//  try{
//   const month = await ExpenseMonth.findById(req.params.id);
//   res.status(200).send(month);
//  }catch(error){
//   console.log('Did not find that month with ID:',req.params.id);
//   res.status(400).send(error);
//  }
// });

//create new month          //Create
router.post('/newmonth/',async (req, res)=>{
 console.log('adding new month of expenses, req.body:', req.body)
 const newMonth = await ExpenseMonth(req.body);
 try{
  await newMonth.save();
  res.status(201).send(newMonth);
 }catch(error){
  console.log('could not create new expenses month');
  res.status(400).send(error);
 }
});

//update by month ID              //update
router.patch('/updatemonth/:id',async (req, res)=>{ 
 try{
  const exp = await ExpenseMonth.findByIdAndUpdate(req.params.id, req.body); 
  if(!exp){
   console.log('could not find that month')
   return res.status(404).send();
  }
  console.log('cool, updating the month')
  res.status(201).send(exp);
 }catch(error){
  console.log('could not complete the upadte');
  res.status(400).send(error);
 }
});

//add expense to month by month ID
router.patch('/addExpense/:id',async (req, res)=>{ 
 try{
  const exp = await ExpenseMonth.findByIdAndUpdate(req.params.id, req.body); 
  console.log('62 req.body: ', req.body)
  if(!exp){
   console.log('could not find that month')
   return res.status(404).send();
  }
  console.log('cool, updating the month')
  console.log('exp: ',exp,'exp.details: ',exp.details)
  exp.details.push(req.body);
  res.status(201).send(exp);
  await exp.save();
 }catch(error){
  console.log('could not add expense');
  res.status(400).send(error);
 }
});


//delete an expense by id
// router.delete('/deleteexp/:id',async (req, res)=>{
//  console.log('req.params.id:',req.params.id)
//  try{
//   const expToDelete = await ExpenseMonth.XXXX({});
//   res.status(XXXX).send(XXXX);
//  }catch(error){
//   console.log('could not XXXX');
//   res.status(400).send(error);
//  }
// });


//delete a month


/*
router.XXXX('/XXXX/',async (req, res)=>{
 try{
  const XXXX = await ExpenseMonth.XXXX({});
  res.status(XXXX).send(XXXX);
 }catch(error){
  console.log('could not XXXX');
  res.status(400).send(error);
 }
});

*/

module.exports = router;