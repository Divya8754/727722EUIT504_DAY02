import React, { useState } from 'react';
import './signup.css';
const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmpassword(event.target.value);
  };
  const handleSign = (event) => {
    event.preventDefault();
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmpassword('');
  };
  let message;
  let count = 0;
  let f = 0;
  let flag = 0;
  function formValidation(){
    if(username.length===0){
      message="Enter your name";
      alert(message);
    }
    if(username.length!==0){
      let uppercaseLetter = 0;
      let LowercaseLetter = 0;
      for(let i=0;i<username.length;i++){
        if(username[i]===username[i].toUpperCase()){
          uppercaseLetter++;
        }
        else{
          LowercaseLetter++;
        }
      }
      if(LowercaseLetter===0){
        message="username must contains lowercase letter";
        alert(message);
      }
      if(uppercaseLetter===0){
        message="username must contains uppercase letter";
        alert(message);
      }
    }
    if(email.length===0){
      message="plz enter your email";
      alert(message);
    }
    if(email.length!==0){
      for(let i=0;i<email.length;i++){
        if(email[i].includes('@')){
          count=1;
        }
        if(email[i]===Number){
          flag=1;
        }
        if(email[i]===String){
          f=1;
        }
      }
      if(count===0 || f===0 || flag===0){
        message="plz includes @ symbol or digit or alphabet";
        alert(message);
      }
    }
    if(password.length===0){
      message="Enter your password";
      alert(message);
    }
    if(password.length!==0){
      if(password!==Number){
        message="password must contains digits";
        alert(message);
      }
    }
  }
  return (
    <div className="login-container">
      <h1>SigUp Page</h1>
      <div className="img-cards"></div>
      <form onSubmit={handleSign}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <span style={{paddingLeft: 80}}></span>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <span style={{paddingLeft: 108}}></span>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <span style={{paddingLeft: 83}}></span>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          </div>
        <div className="form-group">
          <label htmlFor="confirm">Confirm-Password:</label>
          <span style={{paddingLeft: 20}}></span>
          <input
            type="password"
            id="confirmpassword"
            value={confirmpassword}
            onChange={handleConfirmPasswordChange}
          />
          <div className="btn">
        <button type="submit" onClick={formValidation}>SignUp</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;