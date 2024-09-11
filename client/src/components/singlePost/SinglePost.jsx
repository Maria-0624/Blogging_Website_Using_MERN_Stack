import './SinglePost.css'
import React from 'react'
import Naruto from '../../images/naruto.jpg'
import luffy from '../../images/straw.png'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src={luffy} className='singlePostImg' alt=''></img>
                <h1 className="singlePostTitle">
                    Hii I am Naruto Uzumaki.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Safak</b></span>
                    <span className='singlePostDate'>1 hour go</span>
                </div>
                <p className='singlePostDesc'>
                    Naruto Uzumaki, with unwavering determination and a fierce sense of justice,
                    proclaims, “I’m not gonna run away, I never go back on my word!
                    That’s my nindo: my ninja way!”.
                    Naruto Uzumaki, with unwavering determination and a fierce sense of justice,
                    proclaims, “I’m not gonna run away, I never go back on my word!
                    That’s my nindo: my ninja way!”.
                    Naruto Uzumaki, with unwavering determination and a fierce sense of justice,
                    proclaims, “I’m not gonna run away, I never go back on my word!
                    That’s my nindo: my ninja way!”.
                    Naruto Uzumaki, with unwavering determination and a fierce sense of justice,
                    proclaims, “I’m not gonna run away, I never go back on my word!
                    That’s my nindo: my ninja way!”.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
