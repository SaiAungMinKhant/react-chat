import React from "react";
import {NavLink} from 'react-router-dom'

const SideBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink>Contacts</NavLink>
                </li>
                <li>
                    <NavLink>Messages</NavLink>
                </li>
                <li>
                    <input type="checkbox" name="chechbox" id="toggle-box-checkbox" />
                    <label for="toggle-box-checkbox" className="toggle-box-label-day"></label>
                    <label for="toggle-box-checkbox" className="toggle-box-label-night"></label>
                </li>
            </ul>
        </nav>
    )
}