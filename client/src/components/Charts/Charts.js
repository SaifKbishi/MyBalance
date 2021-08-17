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
 const [chartData, setChartData] = useState([]);

 const fetchData = async () =>{
  console.log('hello fetchData');
    try{
      const data = await axios.get('/exp/allExpenses/');      
      setChartData(data.data);
     }catch(error){
      console.log('could not fetch data', error);
     }
     console.log('finished fetching');
 }

const bringAllData = ()=>{
  console.log('bringAllData starts')
  return new Promise(resolve => {
    axios.get('/exp/allExpenses/')
    .then(res =>{
      console.log('32 got results: ',res)
      setChartData(res.data);
    })
    .then(
      getSumByMonth2()
    )
    .then(
        chart()
    )
    .then(
      colorArray()
    )    
    
    resolve(chartData);
  });
}


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
   return monthesSummArray;
 }//getSumByMonth 

const getSumByMonth2 = async ()=>{
  console.log('getSumByMonth2 starts');
  console.log('59 chartData: ', chartData)
  for(let month=1; month<=12; month++){
    let aMonthSum=0;
      chartData.forEach((exp)=>{
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
    console.log('63 monthesSummArray: ', monthesSummArray)
    return monthesSummArray;
}

 const colorArray = async ()=>{
  for(let i=0; i<=12; i++){
    if(monthesSummArray[i]>0)
    {bgColorArray[i] = chartColors.green;}
    else{bgColorArray[i] = chartColors.red;}    
  }
}//colorArray

const chart= async()=>{
  console.log('chart starts')
  await getSumByMonth2().then(()=>{
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
  })

  console.log('chart')
}

 useEffect(()=>{
   console.log('useEffect starts')
  bringAllData();
  //  fetchData();
  //  getSumByMonth2();
  //  chart();
  //  colorArray();  
 },[]); 
//  },[expense]); 

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
