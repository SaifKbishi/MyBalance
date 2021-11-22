import React, { useState} from "react";
import TextInput from '../utils/TextInput';

const CategoryForm = () => {
  const initialState = {title:'', CategoryId: '',};
  const [category, setCategory] = useState(initialState);
  const handleChange =(e)=>{
    console.log(e.target.value,' ', e.target.name);
    setCategory({...category,[e.target.name]: e.target.value});
  }

  return (
    <div className="categoryFormContainer">
      CategoryForm
      <form>
      <span>
        {/* <TextInput divCN="form-group" labelText="Name: " name="name"  type="text" value={expense.name} onChange={handleChange}  inputCN="form-control" required="required"/> */}
        <TextInput divCN="form-group" labelText="Title" name="name" type="text" value={category.name} onChange={handleChange} inputCN="form-control" required="required"/>
      </span>
      
      </form>
    </div>
  );
};

export default CategoryForm;