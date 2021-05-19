import React  from 'react';
import './utilsStyle.css';

const RadioButton =({divCN, inputType, inputID, name, value, labelID, htmlFor, labelText, checked})=>{

 return(
  <div className={divCN}> 
     <input type={inputType} 
     id={inputID}
     name={name}
     value={value} 
     checked={checked}/> 
     <label id={labelID} htmlFor ={htmlFor}>{labelText}</label>
   </div>
 );
}
export default RadioButton;
