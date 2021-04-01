import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div className="logged-nav">
            <div className="logged-left">
                <Link to="/home"><div className="white-btn">Home</div></Link>
            </div>
            <div className="logged-right">
                <p>Hello, {currentUser.username}</p>
                <div onClick={logout} className="yellow-btn">Log Out</div>
            </div>
        </div>
    ) : null;
    
    return(
            <div>
                {greeting}
            </div>
    )
}

export default Navbar; 
