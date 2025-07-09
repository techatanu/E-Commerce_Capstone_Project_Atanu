import React, {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "./firebase";
import '../Pages/CSS/Login.css';
import {setDoc, doc} from "firebase/firestore";



function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if(user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname,
                });
            }
            console.log("User registered successfully");
            window.location.href = "/";
        } catch (error) {
            console.log(error.message);
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
                onChange={(e) => setFName(e.target.value)}
                required/>
            </div>

            <div className="structure">
                <label>Last name</label>
                <input 
                type="text" 
                className="form-control"
                placeholder="Enter Last name"
                onChange={(e) => setLName(e.target.value)}/>
            </div>

            <div className="structure">
                <label>Email</label>
                <input 
                type="email" 
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="structure">
                <label>Password</label>
                <input 
                type="password" 
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="d-grid">
                <button type='submit' className='btn btn-primary'>
                    Sign Up
                </button>
            </div>
            <p className='forgot-password text-right'>
                Already registered <a href="/Login">Login</a>
            </p>
        </form>
      </div>
    </div>
    );
}
export default Register;