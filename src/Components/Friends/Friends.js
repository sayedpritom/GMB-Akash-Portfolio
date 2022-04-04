import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response => response.json()))
        .then(data => setFriends(data))
    },[])


    return (
        <div>
            <h1>Friend Component goes here</h1>
            {friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)}
        </div>
    );
};

export default Friends;