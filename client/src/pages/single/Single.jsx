import './Single.css'
import React from 'react'
import Sidebar from '../../components/sidebar/sideBar'
import SinglePost from '../../components/singlePost/SinglePost'

const Single = () => {
  return (
    <div className='single'>
      {/* post */}
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default Single
