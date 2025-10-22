import React, { useState } from 'react';
import '../Pages/CSS/Login.css';
import { auth } from "./firebase";
import { signInWithEmailAndPassword  }  from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedEmail = email.trim();
        if (!trimmedEmail || !password) {
            console.log('Please enter email and password');
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, trimmedEmail, password);
            console.log("User logged in successfully");
            navigate('/', { replace: true });
        } catch (error) {
                console.log(error.message);
        }
            
        }
    

    return (
        <div className="auth-wrapper">
            <div className="auth-i">
        <form onSubmit={handleSubmit }>
            <h3>Login</h3>

            <div className="structure">
                <label>Email address</label>
                <input 
                type="email"
                className='form-control'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 />
            </div>

            <div className="structure">
                <label>Password</label>
                <input 
                type="password"
                className='form-control'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
            </div>

            <div className="d-grid">
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </div>
            <p className='forgot-password text-right'>
                New user <a href="/Register">Register Here</a>
            </p>
        </form>
        </div>
        </div>
    )
}

export default Login;