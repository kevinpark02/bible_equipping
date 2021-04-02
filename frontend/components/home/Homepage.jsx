import React from 'react';

class Homepage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="homepage-title-border">
                <h1>
                    I Am John The
                    <span
                    class="txt-type"
                    data-wait="3000"
                    data-words='["Photographer", "Designer", "UI/UX Dev"]'
                    ></span>
                </h1>  
                {/* <h1 className="txt-type"
                    data-wait="3000"
                    data-words='["Your word is a lamp to my feet and a light to my path (Psalm 119:105).",
                                "The grass withers, the flower fades, but the word of our God will stand forever (Isaiah 40:8).",
                                "For the Lord gives wisdom; from his mouth come knowledge and understanding (Proverbs 2:6)"]'>
                </h1> */}
            </div>
        )
    }
}

export default Homepage;