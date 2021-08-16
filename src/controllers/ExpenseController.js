const Expense = require('../models/expenses_Model');

const allExpenses = async (req, res)=>{
 try{
  const allExpData = await Expense.find({});
  res.status(200).send(allExpData);
 }catch(error){
  console.log('could not fetch all Month expenses');
  res.status(400).send(error);
 }
};

const addExpense = async (req, res)=>{
 const newExpense = await Expense(req.body);
 try{
  await newExpense.save();
  res.status(201).send(newExpense);
 }catch(error){
  console.log('could not create new expenses');
  res.status(400).send(error);
 }
};
const updateExpense = async (req, res)=>{
 try{
  const exp1 = await Expense.findByIdAndUpdate(req.params.id, req.body);
  if(!exp1){
   return res.status(404).send();
  }
  res.send(exp1);
 }catch(error){
  console.log('could not complete the update');
  res.status(400).send(error);
 }
};
const deleteExpense = async (req, res)=>{
  console.log(`EC delete ${req.params.id}`);
 try{
  const expItem = await Expense.findById(req.params.id);  
  console.log(`EC2 delete ${expItem.name}`);
  console.log(`EC2 delete ${expItem.amount}`);
  console.log(`EC2 delete ${expItem.expenseType}`);

  const expToDelete = await Expense.findByIdAndDelete(req.params.id);
  if(!expToDelete){
   return res.status(404).send();
  }
  console.log(`${expItem.name}, was deleted`)
  res.status(200).send(expToDelete);
 }catch(error){
  console.log(`could not delete item because of error: ${error}`);
  res.status(400).send(error);
 }
};
const getExpenseByID = async (req, res)=>{
 try{
  const expItem = await Expense.findById(req.params.id);
  res.status(200).send(expItem);
 }catch(error){
  console.log('Did not find expense with ID:',req.params.id);
  res.status(400).send(error);
 }
};
// original
// const viewbymonth = async (req, res)=>{
//  try{
//   const month = req.params.month;
//   const allExpData = await Expense.find({});
//   const filteredData = allExpData.filter(byMonth=> {
//    let m = byMonth.date.getMonth()+1;
//     if(m == month){
//      return byMonth;
//     }else{
//      return false;
//     }
//   });
//   res.status(200).send(filteredData);
//  }catch(error){
//   console.log('EC Did not find that month :',req.params.month);
//   res.status(400).send(error);
//  }
// };

const viewbymonth = async (req, res)=>{ 
 try{
  let month = Number(req.params.month);  
  let query = [{'$project': {'name': 1, 'expenseType':1, 'date': 1, 'repeats':1, 'amount': 1,'month': {'$month': '$date'}}}, {'$match': {'month': month}}];  
  const allExpData = await Expense.aggregate(query);
  res.status(200).send(allExpData);
 }catch(error){
  console.log('EC Did not find that month :',req.params.month);
  res.status(400).send(error);
 }
};

module.exports = {
 allExpenses,
 addExpense,
 viewbymonth,
 updateExpense,
 deleteExpense,
 getExpenseByID
}

