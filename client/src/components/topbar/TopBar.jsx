import React from 'react'
import "./TopBar.css"
import pimg from "../../images/straw.png"
import { Link } from 'react-router-dom'

const TopBar = () => {
    const user = true;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-x-twitter"></i>
            </div>
            <div className="topCenter">
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link to='/' className='link'>HOME</Link>
                        </li>
                        <li className='topListItem'>
                            <Link to='/about' className='link'>ABOUT</Link>
                        </li>
                        <li className='topListItem'>
                            <Link to='/contact' className='link'>CONTACT</Link>
                        </li>
                        <li className='topListItem'>
                            <Link to='/write' className='link'>WRITE</Link>
                        </li>
                        <li className='topListItem'>
                            {user && "LOGOUT"}
                        </li>
                    </ul>
            </div>

            <div className="topRight">
                {
                    user ? (<img src={pimg} alt=''
                        className='topImg'></img>) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link to='/login' className='link'>LOGIN</Link>
                            </li>
                            <li className='topListItem'>
                                <Link to='/register' className='link'>REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar
