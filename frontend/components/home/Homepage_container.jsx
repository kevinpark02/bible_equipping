import { connect } from 'react-redux';
import Homepage from "./Homepage";

const mapStateToProps = (state) => {
    return({
        currentUser: state.session.id,
        psalm: {
            verse: "Your word is a lamp to my feet and a light to my path (Psalm 119:105)",
            ref: "Psalm 119:105"
        },
        isaiah: {
            verse: "The grass withers, the flower fades, but the word of our God will stand forever",
            ref: "Isaiah 40:8"
        },
        proverbs: {
            verse: "For the Lord gives wisdom; from his mouth come knowledge and understanding",
            ref: "Proverbs 2:6"
        }
    });
};

export default connect(mapStateToProps, null)(Homepage);