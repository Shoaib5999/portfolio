import React from 'react'
import Profile from './Profile'
import Footer from './Footer'
import "../Home/Home.css"
export default function Home() {
  return (
    <div className='Home-Components' id='home'>
        <Profile/>
        <Footer/>
    </div>
  )
}
