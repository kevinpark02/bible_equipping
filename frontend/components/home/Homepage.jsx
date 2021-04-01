import React from 'react';
import { Link } from 'react-router-dom'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="home-nav">
                <Link to="/signup"><li className="signup-btn white-btn">Sign Up</li></Link>
                <Link to="/login"><li className="login-btn yellow-btn">Log In</li></Link>
            </div>        
        )
    }
}

export default Homepage;