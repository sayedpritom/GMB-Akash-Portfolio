import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './CurrentlyLoggedInUser.css';

const CurrentlyLoggedInUser = () => {

    const navigate = useNavigate();

    // Get the current user using useAuthState hook
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    // If user is logged out then redirect to login
    if (!user) {
        navigate('/login')
    }

    return (
        <div className="currentlyLoggedInUser">
            <div className="container text-center bg-white rounded shadow py-5">
                <img className="img-fluid img-rounded my-3" src={user?.photoURL} alt="" />
                <h1 className="my-3">{user?.displayName}</h1>
                <h3>{user?.email}</h3>
                <p className="text-secondary">Account creation time: {user?.metadata?.creationTime}</p>
                <p className="text-secondary">Account sign in time: {user?.metadata?.lastSignInTime}</p>
                <button className="btn btn-dark my-3" onClick={() => logout()}>Log out</button>
            </div>
        </div>
    );
};

export default CurrentlyLoggedInUser;