import React from "react";

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
                <p>
                What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default SideBar;