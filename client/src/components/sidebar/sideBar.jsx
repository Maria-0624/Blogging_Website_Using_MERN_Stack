import React from 'react'
import './sideBar.css'
import Luffy from '../../images/naruto.jpg'

const sideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={Luffy} alt=''></img>
        <p>Naruto Uzumaki, with unwavering determination and a fierce sense of justice,
          proclaims, “I’m not gonna run away, I never go back on my word!
          That’s my nindo: my ninja way!”.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default sideBar
