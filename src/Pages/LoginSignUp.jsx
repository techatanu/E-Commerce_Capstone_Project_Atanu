import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import './CSS/LoginSignUp.css'

const DEMO_EMAIL = "test@example.com";
const DEMO_PASSWORD = "test1234";

export const LoginSignUp = () => {
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setMessage("Login successful!");
      setTimeout(() => {
        navigate('/');
      },1000)

    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder='Name' 
          value={name}
          onChange={e => setName(e.target.value)}
          required
          />
          <input 
          type="email" 
          placeholder='Email' 
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          />
          <input 
          type="password" 
          placeholder='Password' 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          required
          />
        <button className='loginsignup-btn' type='submit'>Sign Up</button>
        </form>
        {message && <div style={{textAlign: "center", margin: "10px 0", color: message.startsWith("✅") ? "green" : "red"}}>{message}</div>}
        <p className='loginsignup-login'>
          Already have an account? <a href="/login">Log In</a>
        </p>
        <div className="loginsignup-divider">
          <span>or</span>
        </div>
        <button className="loginsignup-google">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
          Sign up with Google
        </button>
      </div>
    </div>
  )
}