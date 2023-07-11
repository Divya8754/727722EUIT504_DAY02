import React, { useState } from 'react';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  // const nav=useNavigate();
  //  const handleClick=()=>{
  //  nav("/")
  // }
  // const navigate = useNavigate();
//   function handleClick(event){
//      navigate('/signup');
//
// }
// const handleClick=()=>{
//   navigate("/about")
// }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    setUsername('');
    setPassword('');
  };
  function formValidation(){
    let message;
    if(username.length===0){
      message="Enter your name";
    }
    else if(username.length!==0){
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
      }
      if(uppercaseLetter===0){
        message="username must contains uppercase letter";
      }
    }
    if(password.length===0){
      message="Enter your password";
    }
    else{
      if(password!==Number){
        message="password must contains digits";
      }
    }
  }
 
  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <div className="img-cards"></div>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="btn">
        <button type="submit" onClick={formValidation}>Login</button>
          </div>
      <a href="#">
        Create Account
      </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;