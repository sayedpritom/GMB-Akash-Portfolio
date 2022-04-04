import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams()
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(response => response.json())
        .then(data => setFriend(data))
    }, [])

    return (
        <div>
            {/* <h1>Details of Friend: {params.friendId}</h1> */}
            <h1>Details of Friend: {friendId}</h1>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h6>Website: {friend.website}</h6>
            {/* <h6>city: {friend.address && friend.address.city}</h6> */}
            <h6>city: {friend.address?.city}</h6>
            <h6>Latitude: {friend.address?.geo?.lat}</h6>
        </div>
    );
};

export default FriendDetail;