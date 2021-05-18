import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import './Charts.css'

var chartColors = {
 red: 'rgb(255, 99, 132)',
 blue: 'rgb(54, 162, 235)'
};

const Charts = ()=>{
 const [state, setstate] = useState({});
 const [expense, setExpense] = useState([]);
 const monthesSummArray=[];

 useEffect(()=>{
  const fetchData = async() =>{
   try{
    const data = await axios.get('/exp/allExpenses/');    
    setExpense(data.data);
   }catch(error){
    console.log('could not fetch data', error);
   }
  }
  fetchData();
  chart();
 },[]); 

 const chart= async()=>{
  setstate({
   labels: ['January', 'February', 'March','April', 'May','June','July','August','September','October','November','December'],
   datasets: [
     {
       label: 'balance by month 2021',
       backgroundColor: 'rgba(0,128,0,1)',
       borderColor: 'rgba(0,0,0,1)',
       borderWidth: 2,
       data: monthesSummArray// [65, -59, 80, 81, 56,65, -29, 80, 81, 56, 20, 33]
     }
   ]
 });
 // for(let i=0; i<chart.datasets.data.length; i++){
 //  if(datasets.data[i] > 0){
 //   backgroundColor = chartColors.blue;
 //  }else{
 //   backgroundColor = chartColors.red;
 //  }
 // }
 } 
  
 const getSumByMonth = async ()=>{
  for(let month=1; month<=12; month++){
   let aMonthSum=0;
    expense.forEach((exp)=>{
    let adate = new Date(exp.date);
    if(Number(adate.getMonth()+1) ==month ){
     // console.log(Number(adate.getMonth())+1 ,'=', month, exp.name);
     if(exp.expenseType === 'income') {
      aMonthSum+=exp.amount;
     }else{
      aMonthSum-=exp.amount;
     }
    }
   });
    monthesSummArray.push(aMonthSum);   
  }
  console.log('monthesSummArray: ',monthesSummArray);
  console.log(monthesSummArray)
 }//getSumByMonth

 return (
  getSumByMonth(),
  <div className="charts">
    <Bar
      data={state}
      options={{
        title:{
          display:true,
          text:'balance after expenses',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />
  </div>
);

}
export default Charts
