import React from 'react';

class VerseIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: ""
        }

        this.update = this.update.bind(this);
    }

    update(e) {
        e.preventDefault();
        this.setState({ ["answer"]: e.target.value });
        setTimeout(() => {
            this.props.updateVerse({
                id: this.props.verse.id,
                answer: this.state.answer
            }), 100
        })
    }

    render() {
        const verse = this.props.verse;
        const quiz = this.props.quiz;

        const correctAnswer = quiz.submitted ? 
            (verse.answer === verse.chapter) ? 
                <p>Correct!</p> : 
                <p>Incorrect {verse.chapter}</p> :
                null;

        return(
            <div className="verse-index-item">
                <li>{verse.verse}</li>
                <input type="text"
                       value={this.state.answer}
                       onChange={this.update}
                       />
                {correctAnswer}
            </div>
        )
    }
}

export default VerseIndexItem