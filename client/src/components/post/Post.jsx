import React from 'react'
import './Post.css'
import Naruto from '../../images/naruto.jpg'

const Post = () => {
    return (
        <div className='post'>
            <img src={Naruto} className='postImg' alt=''></img>
            <div className="postInfo">
                <div className="postCats">
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className="postTitle">
                    Hello I am Naruto Uzumaki. dattebayo!!
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
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
    )
}

export default Post
