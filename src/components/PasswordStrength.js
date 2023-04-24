import React from "react";

import './PasswordStrength.css';  

const PasswordStrength = (props) => {
    const pass= props.value;
    const specialChar= new RegExp(/[~`!@#$%\^&*+=\-\[\]\\';,./{}|\\":<>\?]/);
    const num= new RegExp('[0-9]');
    if(pass.length === 0){
      return (<p> </p>);
    }
    if(pass.length < 6 ){
      return(
        <p className="weak">Too short</p>
      )
    }
    if(!num.test(pass)) {
        return (
          <p className="med">Must contain atleast one number</p>
        )
      }
    if(!specialChar.test(pass)) {
        return (
          <p className="med">Must contain atleast one special character</p>
        )
      }
    return(
      <div>
        <p className="good">Strong password</p>
        <input type="submit" value="Submit" />
      </div>
    )
  }
 export default PasswordStrength;