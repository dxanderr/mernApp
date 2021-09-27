import React, { useContext } from 'react'
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import {
    TopbarContainer,
    TopbarCenter,
    TopbarLeft,
    TopbarRight
} from './topbarStyle';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';

export default function Topbar(){
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <TopbarContainer>
            <TopbarLeft>
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">Social</span>
                </Link>
            </TopbarLeft>
            <TopbarCenter>
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friends, posts or any video" type="text" className="searchInput" />
                </div>
            </TopbarCenter>
            <TopbarRight>
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}><img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.jpg"} alt="" className="topbarImage" />
                </Link>
                
            </TopbarRight>
        </TopbarContainer>
    )
}



