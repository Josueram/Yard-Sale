import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data);
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="Logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" name="email" placeholder="micorreo@email.com" className="input" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" placeholder="********" className="input input-password" />
          <button 
            className="primary-button login-button" 
            onClick={handleSubmit}>
            Login
          </button>
          <a href="#">Forgot my password</a>
        </form>
        <button 
          className="secondary-button singup-button">
          Sign up
        </button> 
      </div>
    </div>
  );
}

export default Login;