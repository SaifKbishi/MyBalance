const mongoose = require('mongoose');
const validator = require('validator');

const ExpenseMonth = mongoose.model('expMonth',{
 year:{
  type:String,
  required: [true, 'Year is required to start filling a Month expenses']
 },
 month:{
  type:String,
  required: [true, 'Month is required to start filling a Month expenses']
 },
 expenseType:{
  type:String,
  required: [true, 'you must set the expense type']
 },
 details:[
    {
     name:{
      type: String,
      // required: [true, 'Please set the Expense name. the store name for example'],
      min:2
     },
     Amount:{
      type:Number,
      // required: [true, 'enter the amount you paid for this store'],
      min:1
     },
     description:{
      type: String,
      // required:[false, 'it can help if you add a description'],
      min:0
     },
     repeats:{
      type:Number,
      // required:[false, 'only if you have divided the payment']
     }
   }
 ]
});

module.exports = ExpenseMonth;

