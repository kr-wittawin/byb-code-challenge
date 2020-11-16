import React, { useState } from 'react';
import './signupForm.css';
import InputField from "../InputField/inputField";
import logo from "../../assets/logo.png";
import routes from "../../api/user";

function SignupForm() {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  function validateForm() {
    if (!FullName) {
      return "Please enter your full name";
    }
    if (!Email) {
      return "Please enter your email";
    }
    if (!Password) {
      return "Please enter your password";
    }
    if (!ConfirmPassword) {
      return "Please confirm your password";
    }
    if (Password !== ConfirmPassword) {
      return "Password does not match";
    }

    return "";
  }

  function signup() {
    var isFormValidated = validateForm() === "";
    if (isFormValidated) {
      console.log("SIGNUP", FullName, Email, Password);
      var objectToSend = {
        fullname: FullName,
        email: Email,
        password: Password
      }
      routes.signup(objectToSend)
        .then(res => {
          setFullName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setErrorMsg("");
        })
        .catch(e => {
          setFullName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setErrorMsg("Sign up error, please contact support or try again later");
        });

    } else {
      setErrorMsg(validateForm());
    }
  }

  return (
    <div className="signup-form">  
      <div className="logo">
        <img src={logo} alt="gym-time-logo"/>
      </div>
      <div className="signup-text">
        It's free. Only a minute to complete
      </div>
      <div className="form-field fullname">
        <InputField
          type={"text"}
          label={"Full Name"}
          value={FullName}
          onChange={(e)=>setFullName(e.target.value)}
        />
      </div>
      <div className="form-field email">
        <InputField
          type={"text"}
          label={"Email"}
          value={Email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="form-field password">
        <InputField
          type={"password"}
          label={"Password"}
          value={Password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className="form-field confirm-password">
        <InputField
          type={"password"}
          label={"Confirm password"}
          value={ConfirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="error-message">
        {ErrorMsg}
      </div>
      <div className="signup-button" onClick={()=>signup()}>
        Sign Up
      </div>
    </div>
  );
}

export default SignupForm;
