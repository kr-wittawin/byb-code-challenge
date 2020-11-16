import './signupForm.css';
import InputText from "../InputText/inputText";

function SignupForm() {
  return (
    <div className="signup-form">  
      <div className="logo">
        <img src="../../assets/logo.png" alt="gym-time-logo"/>
      </div>
      <div className="form-field fullname">
        <InputText/>
      </div>
      <div className="form-field email">
        <InputText/>
      </div>
      <div className="form-field password">
        <InputText/>
      </div>
      <div className="form-field confirm-password">
        <InputText/>
      </div>
    </div>
  );
}

export default SignupForm;
