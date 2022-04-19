import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    // Protected route is Implemented by this RequireAuth route

    // get the user
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if(loading) {
        return <Loading></Loading>
    }

    // if user not found then redirect to login route
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    // if user is found then let the user access to the protected route
    return children
};

export default RequireAuth;