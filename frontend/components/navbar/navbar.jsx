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
    ) : (
        <div className="home-nav">
            <div className="left-nav">
                <Link to="/"><h1 className="title-nav">Bible Equipping</h1></Link>
            </div>
            <div className="auth-nav">
                <Link to="/signup"><li className="white-btn">Sign Up</li></Link>
                <Link to="/login"><li className="yellow-btn">Log In</li></Link>
            </div>
        </div>
    );

    return(
            <div>
                {greeting}
            </div>
    )
}

export default Navbar; 
