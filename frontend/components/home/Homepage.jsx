import React from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        
    }

    render() {
        return(
            <div className="homepage-title-border">
                <div className="homepage-verse">
                    "Your word is a lamp to my feet and a light to my path"
                </div>
                <div className="homepage-reference">
                    - Psalm 119:105 -
                </div>
            </div>
        )
    }
}

export default Homepage;