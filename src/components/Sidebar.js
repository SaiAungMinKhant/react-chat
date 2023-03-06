import React from "react";
import Chatbox from "./Chatbox";

const SideBar = ({onRouteChange, isSignIn}) => {
    return (
        <div>
            <div className="sidebar">
                <a href="#home">Home</a>
                <a href="#contact">Contacts</a>
                <a href="messages">Messages</a>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round" />
                </label>
                <p onClick={() => onRouteChange('signin')} className='pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='pointer'>Register</p>
            </div>
            <div className="content">
                <Chatbox/>
            </div>
        </div>
    )
}

export default SideBar;