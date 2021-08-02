import React from 'react'
import VideoHero from '../components/Header/VideoHero'
import Header from '../components/Header/Header'
import FloatingSidebar from '../components/Global/FloatingSidebar'

const Home = () => {
  return (
    <div className="wrapper">
      <VideoHero />
      <Header />
      <FloatingSidebar />
    </div>
  )
}

export default Home
