import './Register.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type='text' className='registerInput' placeholder='Enter your username'></input>
                <label>Email</label>
                <input type='text' className='registerInput' placeholder='Enter your email'></input>
                <label>Password</label>
                <input type='password' className='registerInput' placeholder='Enter your password'></input>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
            <Link to='/login' className='link'>login</Link>
            </button>
        </div>
    )
}

export default Register
