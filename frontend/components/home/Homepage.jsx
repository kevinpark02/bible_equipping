import React from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        debugger
        // while (this.props.home) {
        //     setTimeout(() => this.props.fetchPsalm(), 3000)
        //     setTimeout(() => this.props.fetchIsaiah(), 3000)
        //     setTimeout(() => this.props.fetchProverbs(), 3000)
        // }
    }

    render() {
        // debugger
        const splash = this.props.splash;

        const verse = splash === "psalm" ?
            <div className="homepage-title-border">
                <div className="homepage-verse">
                    "Your word is a lamp to my feet and a light to my path"
                </div>
                <div className="homepage-reference">
                    - Psalm 119:105 -
                </div>
            </div> : 
            splash === "isaiah" ?
            <div className="homepage-title-border">
                <div className="homepage-verse">
                    "The grass withers, the flower fades, but the word of our God will stand forever"
                </div>
                <div className="homepage-reference">
                    - Isaiah 40:8 -
                </div>
            </div> : 
            null       

        return(
            <div>
                {verse}
            </div>
        )
    }
}

export default Homepage;