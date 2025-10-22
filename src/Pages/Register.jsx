import React, { useState } from 'react';
import '../Pages/CSS/Login.css';
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';



function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        const trimmedEmail = (email || "").trim();
        if (!trimmedEmail) {
            setErrorMsg("Please enter a valid email.");
            return;
        }
        if (!password || password.length < 6) {
            setErrorMsg("Password must be at least 6 characters.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, trimmedEmail, password);
            const user = userCredential.user;
            if (!user || !user.uid) throw new Error('No user id returned from auth.');

            // write profile doc for the user
            await setDoc(doc(db, "Users", user.uid), {
                email: user.email,
                firstName: fname || "",
                lastName: lname || "",
                createdAt: new Date().toISOString()
            });

            console.log("User registered and Firestore doc created:", user.uid);
            navigate('/', { replace: true });
        } catch (err) {
            // show both code and message so you can diagnose rules vs auth errors
            console.error('Registration error:', err.code || err.message || err);
            setErrorMsg((err.code ? `${err.code}: ` : "") + (err.message || err));
        }
    };

    return (
        <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleRegister}>
          <h3>Sign Up</h3>

          <div className="structure">
                <label>First name</label>
                <input 
                type="text"
                className='form-control'
                placeholder='Enter first name'
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                required/>
            </div>

            <div className="structure">
                <label>Last name</label>
                <input 
                type="text" 
                className="form-control"
                placeholder="Enter Last name"
                value={lname}
                onChange={(e) => setLName(e.target.value)}/>
            </div>

            <div className="structure">
                <label>Email</label>
                <input 
                type="email" 
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>

            <div className="structure">
                <label>Password</label>
                <input 
                type="password" 
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </div>

            <div className="d-grid">
                <button type='submit' className='btn btn-primary'>
                    Sign Up
                </button>
            </div>
            <p className='forgot-password text-right'>
                Already registered <a href="/Login">Login</a>
            </p>
            {/* show simple inline error message */}
            {errorMsg && <div style={{color:'red'}}>{errorMsg}</div>}
        </form>
      </div>
    </div>
    );
}
export default Register;