import React, { useState } from "react";

import './InputPassword.css';

import PasswordStrength from './PasswordStrength' ;

const InputPassword= () => {

  const [password , setPassword] = useState("");
  
  const handleChange =(event) =>{
    setPassword(event.target.value);
    }
  
  const handleSubmit = (event) => {
      event.preventDefault();
      const enteredPassword = password;
      console.log(enteredPassword);
      setPassword('');
    }
  
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="password" placeholder="Enter Password:" password={password} onChange={handleChange} />
           <PasswordStrength value={password} />
            </form>
        </div>
    );
}

export default InputPassword;