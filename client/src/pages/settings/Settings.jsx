import React from 'react'
import './Settings.css'
import Sidebar from '../../components/sidebar/sideBar'
import Luffy from '../../images/op.jpg'

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={Luffy} alt=''></img>
                        <label htmlFor='fileInput'>
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type='file' id='fileInput' style={{ display: "none"}}></input>
                    </div>

                    <label>Username</label>
                    <input type='text' placeholder='Safak'></input>
                    <label>Email</label>
                    <input type='text' placeholder='safak@gmail.com'></input>
                    <label>Password</label>
                    <input type='password'></input>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
