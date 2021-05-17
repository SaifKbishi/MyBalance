import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import './Charts.css'

// const state = {
//   labels: ['January', 'February', 'March','April', 'May','June','July','August','September','October','November','December'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, -59, 80, 81, 56,65, -59, 80, 81, 56, 20, 33]
//     }
//   ]
// }

const Charts = ()=>{
 const [state, setstate] = useState({});

 const chart=()=>{
  setstate({
   labels: ['January', 'February', 'March','April', 'May','June','July','August','September','October','November','December'],
   datasets: [
     {
       label: 'Rainfall',
       backgroundColor: 'rgba(75,192,192,1)',
       borderColor: 'rgba(0,0,0,1)',
       borderWidth: 2,
       data: [65, -59, 80, 81, 56,65, -29, 80, 81, 56, 20, 33]
     }
   ]
 });
 }
 useEffect(()=>{
  chart();
 },[]);

 return (
  <div className="charts">
    <Bar
      data={state}
      options={{
        title:{
          display:true,
          text:'Average Rainfall per month',
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
