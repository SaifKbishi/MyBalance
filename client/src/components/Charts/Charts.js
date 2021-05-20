import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import './Charts.css';
const monthesSummArray=[];
const bgColorArray=[];
const chartColors = {
 red: 'rgb(255, 00, 00)',
 green: 'rgb(0, 204, 0)'
};

const Charts = ()=>{
 const [state, setstate] = useState({});
 const [expense, setExpense] = useState([]); 

 useEffect(()=>{
  const fetchData = async() =>{
   try{
    const data = await axios.get('/exp/allExpenses/');    
    setExpense(data.data);
    console.log('data.data',data.data);
   }catch(error){
    console.log('could not fetch data', error);
   }
  }
  fetchData();
  console.log('fetchData')

  const getSumByMonth = async ()=>{
    for(let month=1; month<=12; month++){
     let aMonthSum=0;
      expense.forEach((exp)=>{
      let adate = new Date(exp.date);
      if(Number(adate.getMonth()+1) ===month ){
       if(exp.expenseType === 'income') {
        aMonthSum+=exp.amount;
       }else{
        aMonthSum-=exp.amount;
       }
      }
     });
      monthesSummArray.push(aMonthSum);   
    }
    setTimeout(()=>{
    }, 2000);
    console.log('monthesSummArray: ',monthesSummArray);
   }//getSumByMonth
  getSumByMonth();

  const colorArray = async ()=>{
    for(let i=0; i<=12; i++){
      if(monthesSummArray[i]>0)
      {bgColorArray[i] = chartColors.green;}
      else{bgColorArray[i] = chartColors.red;}    
    }
   }//colorArray
  colorArray();

  const chart= async()=>{
    setstate({
     labels: ['January', 'February', 'March','April', 'May','June','July','August','September','October','November','December'],
     datasets: [
       {
         label: 'balance by month: ',
         backgroundColor: bgColorArray,
         borderColor: 'rgba(0,0,0,1)',
         borderWidth: 1,
         data: monthesSummArray
       }
     ]
   });
   } 
  chart();  
 },[]); 

 return (
  <div className="charts">
    <Bar
      data={state}
      options={
		  {
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
