import './Feed.css'
import Share from "../share/Share";
import Post from '../post/Post';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () =>{
            const response = await axios.get("posts/timeline/60de5d268e2ccc179400c057");
            setPosts(response.data)
        };
        fetchPosts();
    },[])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map(p=>(
                    <Post key={p._id} post={p}/>
                ))}  
            </div>
        </div>
    )
}
