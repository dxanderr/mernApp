import React from 'react';
import { useState, useEffect } from 'react';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar'
import { ProfileContainer } from './profileStyle';
import axios from 'axios';
import { useParams } from 'react-router'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    let username = useParams().username;
    
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`)
            setUser(res.data)
        }
        fetchUser();
    }, [username])

    
    return (
        <>
            <Topbar />
            <ProfileContainer>
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" 
                                src={user.coverPicture || PF+"person/noCover.jpg"}   alt="" />
                            <img className="profileUserImg" 
                                src={user.profilePicture || PF + "person/noAvatar.jpg"} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username}/>
                        <Rightbar user={user}/>
                    </div>
                </div>
            </ProfileContainer>
        </>
    )
}

