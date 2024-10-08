import React from 'react'
import './Home.css'
import Header from "../../components/header/Header"
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/sideBar'
import TobBar from '../../components/topbar/TopBar'

export default function Home() {
  return (
    <>
    <Header />
    <div className='home'>
      <Posts />
      <SideBar />
    </div>
    </>
  )
}
