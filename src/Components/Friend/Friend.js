import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    let navigate = useNavigate();

    const {id, name, username, email} = props.friend;
    
    const showFriendDetail = (id) => {
        const path= `/friend/${id}`;
        navigate(path)
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Id: {id}</p>
            <Link to={'/friend/'+id}>Show details</Link>
            <button onClick={() => showFriendDetail(id)}>{username}</button>
        </div>
    );
};

export default Friend;