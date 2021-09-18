import React from 'react';
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar'

import { ProfileContainer } from './profileStyle';

const profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    
    return (
        <>
            <Topbar />
            <ProfileContainer>
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={`${PF}post/3.jpeg`} alt="" />
                            <img className="profileUserImg" src={`${PF}person/7.jpeg`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Yafak Jubi</h4>
                            <span className="profileInfoDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, doloremque!</span>
                        </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed username="John"/>
                        <Rightbar profile/>
                    </div>
                </div>
            </ProfileContainer>
        </>
    )
}

export default profile
