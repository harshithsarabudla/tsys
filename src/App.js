import React  from 'react';
import './App.css';
import CustomerList from './components/customer-list/index.js';
import 'h8k-components';
import { useForm } from "react-hook-form";

const title = "Customer List";
const Form = ({ title }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  var arr = []
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data.name);
    arr.push(data.name);
    reset();
  };

function App() {
  return (
    
        <div className="formContainer">
      
      <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__row">
              <input
                className={`inputForm ${errors.name ? "inputFormError" : ""'}
                name="name"
                type="text"
                placeholder="name"
                ref={register({ required: true })}
              />
            </div>
            <div>
              <button className="form__formButton" type="submit">
                Send
              </button>
            </div>
          </form>
      </div>
    </div>
    
      <h8k-navbar header={title} />
      <CustomerList/>
    <
  );
}

export default App;
