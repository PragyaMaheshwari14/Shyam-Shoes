import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Newsletter from '../components/Newsletter'
import Info from '../components/Info'
import Features from '../components/Featues'
import Marquee from '../components/Marquee'

const Home = () => {
  return (
    <div>
      <Hero />
      <Info />
      <Features />
      <LatestCollection />
      <Marquee />
      <Newsletter />
    </div>
  )
}

export default Home