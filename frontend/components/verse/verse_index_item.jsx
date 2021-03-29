import React from 'react';

class VerseIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: ""
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        const verse = this.props.verse;
        const quiz = this.props.quiz;

        return(
            <div className="verse-index-item">
                <li>{verse.verse}</li>
                <input type="text"
                       value={this.state.answer}
                       onChange={this.update('answer')}
                       />
            </div>
        )
    }
}

export default VerseIndexItem