import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {

    // get the user & others from useSignInWithEmailAndPassword hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // get the password reset hook to implement password reset functionality
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    let errorElement;

    // show error message if error happens
    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>
    }


    let location = useLocation();

    // keep track of the location that user came from
    let from = location.state?.from?.pathname || "/";

    // get the email & password from the input field
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    // sign in using the email & password
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    // password reset function
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email address');
        }
    }

    // show loading animation while fetching data
    if (loading || sending) {
        return <Loading></Loading>
    }

    // if user is found then redirect to the previous page he/she was going.
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="login-container">
            <div className="container">
                <div className="row">
                    <div className="login col-11 col-sm-10 col-lg-8 mx-auto my-4 p-5">
                        <h2 className="login-header">Please Login to Proceed</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="mb-3 my-4" controlId="formBasicPassword">
                                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="button button-login my-3 mx-auto">
                                Login
                            </Button>
                        </Form>
                        {errorElement}
                        <p>New to this website? <Link to="/register" className="text-primary text-decoration-none" onClick={navigateRegister}>Please register</Link>  </p>
                        <p>Forgot Password? <button className="btn btn-link text-decoration-none" onClick={resetPassword}>Reset Password</button>  </p>
                        <SocialLogin></SocialLogin>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;