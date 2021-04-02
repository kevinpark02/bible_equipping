import React from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props)
    }

    switchVerse(ref) {
        if (ref === "psalm") {
            setTimeout(() => {
                this.props.fetchIsaiah()
            }, 5000)
        } else if (ref === "isaiah") {
            setTimeout(() => {
                this.props.fetchProverbs()
            }, 5000)
        } else {
            setTimeout(() => {
                this.props.fetchPsalm()
            }, 5000)
        }
    }

    render() {
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
            splash === "proverbs" ?
            <div className="homepage-title-border">
                <div className="homepage-verse">
                    "For the Lord gives wisdom; from his mouth come knowledge and understanding"
                </div>
                <div className="homepage-reference">
                    - Proverbs 2:6 -
                </div>
            </div> : 
            null;

        return(
            <div>
                {verse}
                {this.switchVerse(splash)}
            </div>
        )
    }
}

export default Homepage;