import React from 'react'
import '../styles/RecoveryPassword.scss';

const RecoveryPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./assets/YardSale_Logos/logo_yard_sale.svg" alt="Logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
      <div className="email-image">
        <img src="./assets/YardSale_Icons/email.svg" alt="email" />
      </div>
      <input type="submit" defaultValue="Login" className="primary-button login-button" />
      <p className="resend"><span>Didn't receive the email? </span><a href="#">Resend</a></p>
    </div>
</div>

  );
}

export default RecoveryPassword;