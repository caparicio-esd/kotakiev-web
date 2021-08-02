import React from 'react'
import VideoHero from '../components/Header/VideoHero'
import Header from '../components/Header/Header'
import FloatingSidebar from '../components/Global/FloatingSidebar'
import IntroBand from '../components/Home/IntroBand'
import BandComponents from '../components/Home/BandComponents'

const Home = () => {
    return (
        <div className="wrapper">
            <VideoHero />
            <Header />
            <FloatingSidebar />
            <main>
                <IntroBand />
                <BandComponents />
            </main>
        </div>
    )
}

export default Home
