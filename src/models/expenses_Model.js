const mongoose = require('mongoose');
const validator = require('validator');

const Expense = mongoose.model(
  'expItem',
  {
  date:{
    type: Date,
    required:[true, 'the date of the expense']
  },
  expenseType:{
    type:String,
    required: [true, 'you must set the expense type']
  },
  expense:{
    type: String
  }, 
  income:{
    type: String
  },
  name:{
    type: String,
    required: [true, 'Please set the Expense name. the store name for example'],
    min:2
  },
  amount:{
    type:Number,
    required: [true, 'enter the amount you paid for this store'],
    min:1
  },
  description:{
    type: String,
    min:0
  },
  repeats:{
    type:Number,
    }   
}
);

module.exports = Expense;

