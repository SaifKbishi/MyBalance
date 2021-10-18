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
{/* <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Option one</label>
</div> */}