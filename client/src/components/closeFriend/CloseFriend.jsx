import React from 'react';
import { SidebarFriend } from './closeFriendStyle';

const CloseFriend = ({user}) => {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <SidebarFriend className="sidebarFriend">
            <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </SidebarFriend>
    )
}

export default CloseFriend
