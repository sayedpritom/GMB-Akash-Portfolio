import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {

    // terms & conditions checkbox state
    const [agreement, setAgreement] = useState(false);

    // createUserWithEmailAndPassword hook from react firebase hooks
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // updateProfile hook from react firebase hooks
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const navigate = useNavigate();

    // switches to login component
    const handleLogin = () => {
        navigate('/login')
    }

    // register new user function  
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')
    }

    return (
        <div className="register-container container">
            <div className="container">
                <div className="row">
                    <div className="register-form login register col-11 col-sm-10 col-lg-8 p-5">
                        <h2 className="text-center my-3 login-header">Please register </h2>
                        <form onSubmit={handleRegister}>
                            <input type="text" name="name" id="" placeholder="Your Name" />
                            <input type="email" name="email" id="email" placeholder="Email Address" required />
                            <input type="password" name="password" id="" placeholder="Password" required />
                            <input onClick={() => setAgreement(!agreement)} type="checkbox" name="terms" id="terms" />
                            <label className={`mx-2 ${agreement ? "text-primary" : "text-danger"}`} htmlFor="terms">Accept our terms and conditions</label>
                            <input
                                disabled={!agreement}
                                type="submit"
                                value="Register"
                                className="button" id="button-register" />
                        </form>
                        <p>Already have an account? <Link to="/login" onClick={handleLogin} className="text-primary text-decoration-none">Login from here</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;