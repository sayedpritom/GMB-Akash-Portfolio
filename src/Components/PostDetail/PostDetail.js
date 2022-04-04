import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setPost(data));
    }, [postId])

    return (
        <div>
            <h3>Post Title: {post.title}</h3>
            <p>Id: {post.id}</p>
            <h4>{post.body}</h4>
        </div>
    );
};

export default PostDetail;