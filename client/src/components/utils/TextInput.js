import React from 'react'

const TextInput=({divCN, labelText, name,  type, value, onChange, inputCN})=>{ 
 return(
  <div className={divCN}>
    <label>{labelText}</label> 
    <input name={name} type={type} value={value} onChange={onChange} className={inputCN} />
  </div>
 );
}

export default TextInput;
