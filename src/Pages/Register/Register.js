import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegister = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;

        
    }
    return (
        <div className="register-form">
            <h2 className="text-center my-3 text-uppercase text-primary">RegisterPlease Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder="Your Name" />
                <input type="email" name="email" id="email" placeholder="Email Address" required/>
                <input type="password" name="password" id="" placeholder="Password" required />
                <input type="submit" value="Register" />
            </form>  
            <p>Already have an account? <Link to="/login" onClick={handleLogin} className="text-primary text-decoration-none">Login from here</Link></p>     
        </div>
    );
};

export default Register;