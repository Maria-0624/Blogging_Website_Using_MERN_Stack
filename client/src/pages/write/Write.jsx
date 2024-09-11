import './Write.css'
import Luffy from '../../images/op.jpg'

import React from 'react'

const Write = () => {
  return (
    <div className='write'>
        <img src={Luffy} alt='' className='writeImg'></img>
      <div className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor='fileInput'>
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type='file' id='fileInput' style={{display: 'none'}}></input>
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}></input>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder='Tell your story...' 
            type='text' 
            className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </div>
    </div>
  )
}

export default Write
