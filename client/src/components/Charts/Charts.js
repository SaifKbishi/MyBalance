import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Bar, Line, PolarArea} from 'react-chartjs-2';
import './Charts.css';

const bgColorArray=[];
const chartColors = {
 red: 'rgb(255, 00, 00)',
 green: 'rgb(0, 204, 0)'
};

const Charts = ()=>{
 const [chartData, setChartData] = useState([]);


const chart= async()=>{
  const monthesSummArray_3=[];
  const bgColorArray=[];
  axios.get('/exp/allExpenses/')
  .then(res => {
    for(let month=1; month<=12; month++){
      let aMonthSum =0;
      res.data.forEach(exp => {
        let aDate = new Date(exp.date);
        if(Number(aDate.getMonth()+1) === month){
          if(exp.expenseType === 'income'){
            aMonthSum += exp.amount;
          }else{
            aMonthSum -= exp.amount;
          }
        }
      });
      monthesSummArray_3.push(aMonthSum);
    }
    for(let i=0; i<=12; i++){
      if(monthesSummArray_3[i]>0){
        bgColorArray[i] = chartColors.green;
        }else{
          bgColorArray[i] = chartColors.red;
        }
    }
    setChartData({
    labels: ['January', 'February', 'March','April', 'May','June','July','August','September','October','November','December'],
    datasets:[
      {
        label: 'Month Blanace',
        data: monthesSummArray_3,
        backgroundColor: bgColorArray,
        borderWidth: 4
      }
      ]
    })

  })
  .catch((error)=>{console.log('error chart', error)});
}

 useEffect(()=>{
   chart();
 },[]); 

 return (
  <div className="charts">
    <Bar
      data={chartData}      
      options={
		  {
        title:{
          display: true,
          text:'balance after expenses',
          fontSize:20
        },
        plugins:{
          legend:{
            display: true,
            position:'right'
          }
        }        
      }      
      }
    />
  </div>
);

}
export default Charts


