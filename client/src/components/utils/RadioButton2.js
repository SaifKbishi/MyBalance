import React  from 'react';
import './RadioButton2.css';

const RadioButton2 =({divCN, inputType, inputID, name, value, labelID, htmlFor, labelText, checked})=>{

 return(
   <div className="form-check form-check-inline">
    <label className="form-check-label" >
      <input className="form-check-input" type="radio" name={name} id={inputID} value={inputID}/>
      {labelText}
    </label>
  </div> 
 );
}
export default RadioButton2;
