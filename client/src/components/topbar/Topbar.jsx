import React from 'react'
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import {
    TopbarContainer,
    TopbarCenter,
    TopbarLeft,
    TopbarRight
} from './topbarStyle';
import {Link} from 'react-router-dom';

const topbar = () => {
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
                <img src="/assets/person/1.jpeg" alt="" className="topbarImage" />
            </TopbarRight>
        </TopbarContainer>
    )
}

export default topbar

