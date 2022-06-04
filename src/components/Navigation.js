import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
            <NavLink to='/React-Test/home' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>Accueil</li>
            </NavLink>
            <NavLink exact to='/React-Test/about' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <li>About</li>
            </NavLink>
            </ul>
 
        </div>
    );
};

export default Navigation;