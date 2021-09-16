import React from 'react'
import Feed from '../../components/feed/Feed';
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar'

import { HomeContainer } from './homeStyle';

const Home = () => {
    return (
        <>
            <Topbar />
            <HomeContainer>
                <Leftbar />
                <Feed />
                <Rightbar/>
            </HomeContainer>
        </>
    )
}

export default Home
