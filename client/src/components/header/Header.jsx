import React from 'react'
import luffy from '../../images/op.jpg'
import './Header.css'

const header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTtileLg'>Blog</span>
        </div>
        <img src={luffy} alt='' className='headerImg'>
        </img>
    </div>
  )
}

export default header
