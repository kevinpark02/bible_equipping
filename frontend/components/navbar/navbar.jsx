import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, logout}) => {
    const greeting = currentUser ? (
        <div className="logged-nav">
            <div className="logged-left">
                <Link to="/home"><div className="gen-btn">Home</div></Link>
            </div>
            <div className="logged-right">
                <p>Hello, {currentUser.username}</p>
                <div onClick={logout} className="gen-btn">Log Out</div>
            </div>
        </div>
    ) :     
    (
        <div className="home-nav">
            <div className="left-nav">
                <Link to="/"><h1 className="title-nav">BIBLE EQUIPPING</h1></Link>
            </div>
            <div className="auth-nav">
                <Link to="/signup"><li className="signup-btn">SIGN UP</li></Link>
                <Link to="/login"><li className="gen-btn">LOG IN</li></Link>
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
