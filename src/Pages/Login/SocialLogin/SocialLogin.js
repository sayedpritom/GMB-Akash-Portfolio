import React from 'react';
import google from '../../../Images/social/Google__G__Logo.svg.png';
import github from '../../../Images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    
    // social sign in methods from react firebase hooks
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let location = useLocation();
    
    // keep track of the location that user came from
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    // show loading animation while loading
    if(loading || loading1) {
        return <Loading></Loading>
    }

    // show error message if error happens
    if (error || error1) {
        errorElement = <p className="text-danger">Error: {error?.message} {error1?.message}</p>
    }
    
    // if user is found then redirect to the previous page he/she was going.
    if (user || user1) {
        navigate(from, { replace: true });
    }

    
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
                <p className=" mt-2 mx-4">Or</p>
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-light border shadow-sm bg-white w-50 mt-3 mx-auto d-block">
                    <img style={{ width: '30px', height: '30px', background: "white", padding: '3px', borderRadius: '50%', marginRight: "15px" }} src={google} alt="" />
                    Sign in with google
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-light border shadow-sm bg-white w-50 mt-3 mx-auto d-block">
                    <img style={{ width: '30px', height: '30px', background: "white", padding: '3px', marginRight: "15px" }} src={github} alt="" />
                    Sign in with github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;