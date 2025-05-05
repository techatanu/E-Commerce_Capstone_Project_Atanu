import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action !== 'Login' && (
          <div className="input">
            <img src={user_icon} alt="User Icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Email Id" />
        </div>

        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>

        {action === 'Login' && (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}
      </div>

      <div className="submit-container">
        <div
          className={`submit ${action === 'Login' ? 'gray' : ''}`}
          onClick={() => setAction('Sign Up')}
        >
          Sign Up
        </div>
        <div
          className={`submit ${action === 'Sign Up' ? 'gray' : ''}`}
          onClick={() => setAction('Login')}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;