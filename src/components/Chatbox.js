import React from "react";

const Chatbox = () => {
    return(
        <div className="chatbox">
            <div className="messages">
                <p>
                </p>
            </div>
            <div className="type">
            <input className="typemessage" placeholder="" type="text" name="email-address" value="" id="email-address"/>
            <button>Send</button>
            </div>
        </div>
    )
}

export default Chatbox;