import React, { useEffect, useState } from 'react';
import Share from '../shared/Shared';
import Post from '../posts/Post';
import {
    FeedContainer
} from './feedStyle';
import axios from 'axios';

// Dummy Data
// import {Posts} from '../../testData'


const Feed = ({username}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async () =>{
            const res = await axios.get("/posts/profile/" + username)
            setPosts(res.data)
        }
        fetchPosts();
    }, [username])


    return (
        <FeedContainer>
            <div className="feedWrapper">
                <Share />
                {/* dummy data */}
                {posts.map((p)=>(
                    <Post key={p._id} post={p}/>
                ))}
                

            </div>
        </FeedContainer>
    )
}

export default Feed
