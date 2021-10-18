import React  from 'react';
import './utilsStyle.css';
import data from './CategoriesData'

const CheckBox =({inputId, labelText, value, onChange})=>{
// console.log('7 categoriesData ',data.categoriesData)
 return(  
   <div className="form-check">
   <input className="form-check-input" type="checkbox" value={value} id={inputId} onChange={onChange}/>
     <label className="form-check-label" htmlFor={inputId}>{labelText}</label>
   </div>
 );
}
export default CheckBox;
