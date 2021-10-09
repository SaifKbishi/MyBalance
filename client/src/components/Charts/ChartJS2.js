import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Line, Bar} from 'react-chartjs-2';

const ChartJS2 = () => {
  const [chartData, setChartData]= useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = ()=>{
    let empSal = [];
    let empAge = [];
    axios.get('https://dummy.restapiexample.com/api/v1/employees')
    .then(res=>{
      for(let dataObj of res.data.data){
        empSal.push(parseInt(dataObj.employee_salary))
        empAge.push(parseInt(dataObj.employee_age))
      }
      setChartData({
        // labels:['sun', 'mon', 'tues', 'wedn', 'thurs', 'fri', 'sat'],
        labels: empAge,
        datasets:[
          {
          label: 'level of thickness',
          // data: [14, 15, 17 , 13, 12, 15, 18],
          data: empSal,
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)'
          ], 
          borderWidth: 4
          }
        ]
      })
    })
    .catch(error => console.log(error))
    console.log(empSal, empAge)    
  }

  useEffect(()=>{
    chart();
  }, [])

  return (
    <div >
      <h2>hello</h2>
      <div style={{height: '700px', width: '700px'}}>
        <Line data={chartData} 
         options={{
            responsive: true,
            title: {text: 'blue blue', display: true},
            scales:{
              yAxes: [
                {
                  ticks:{
                    autoSkip: true,
                    maxTicksLimit: 10, 
                    beginAtZero: true
                  },
                  gridLines:{
                    display : false
                  }
                }
              ],
              xAxes:[
                {
                  gridLines:{
                    display: false,
                  }
                }
              ]
            }
          }}/>
      </div>
    </div>
  );
};

export default ChartJS2;