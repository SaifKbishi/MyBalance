import React, {useState}  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const MonthPicker =()=>{
 const initialState = {month:'', year:''};
 const [monthYear, setMonthYear] = useState(initialState);

 const handleChange = (e)=>{
  console.log(e.target.name, e.target.value);
  setMonthYear({...monthYear, [e.target.name]:e.target.value});
  //here i should create new document in the DB
 }//handleChange

 return(
  <div className="dropdown month">
   <label htmlFor="month">Select the Month and year you want to monitor your expenses.</label><br/>
   {/* <input type="month" id="monthpicker" name="start" min="2021-01" max="2025-12" value={monthYear.Month} onChange={handleChange} required></input> */}
   <select placeholder="YYYY" id="year" onChange={handleChange} >
    <option name="" value=" " >YYYY</option>
    <option name="year" value="2021">2021</option>
    <option name="year" value="2022">2022</option>
    <option name="year" value="2023">2023</option>
    <option name="year" value="2024">2024</option>
   </select>

   <select placeholder="MM" className="form-select form-select-sm" id="month" onChange={handleChange}>
    <option name="" value=" " >MM</option>
    <option name="January" value="January">January</option>
    <option name="February" value="February">February</option>
    <option name="March" value="March">March</option>
    <option name="April" value="April">April</option>
    <option name="May" value="May">May</option>
    <option name="June" value="June">June</option>
    <option name="July" value="July">July</option>
    <option name="August" value="August">August</option>
    <option name="September" value="September">September</option>
    <option name="October" value="October">October</option>
    <option name="November" value="November">November</option>
    <option name="December" value="December">December</option>
   </select>
  </div>
 );
}

export default MonthPicker;