import React from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="Logo" className="logo" />
        <form action="/" className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" id="email" placeholder="micorreo@email.com" className="input" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="********" className="input input-password" />
          <input type="submit" value="Login" className="primary-button login-button" />
          <a href="#">Forgot my password</a>
        </form>
        <input type="button" value="Sing up" className="secondary-button singup-button" /> 
      </div>
    </div>
  );
}

export default Login;