import React  from 'react';
import './RadioButton2.css';

const RadioButton2 =({divCN, inputType, inputID, name, value, labelID, htmlFor, labelText, checked})=>{

 return(
   <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name={name} id={inputID} value={inputID}/>
    <label className="form-check-label" htmlFor={htmlFor}>{labelText}</label>
  </div> 
 );
}
export default RadioButton2;
