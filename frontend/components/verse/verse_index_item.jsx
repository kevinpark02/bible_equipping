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
                <div className="verse-cor-container">
                    <i className="fas fa-check-circle"></i>
                    <p className="verse-cor">Correct | Your answer: {verse.answer}</p>
                </div> :
                <div className="verse-incor-container">
                    <i className="fas fa-times-circle"></i>
                    <p className="verse-incor">Incorrect | Your answer: {verse.answer} | Correct answer: {verse.chapter}</p>
                </div> :
                null;

        const answerInput = quiz.submitted ? 
            null :
            <input className="verse-answer-input" 
                   type="text"
                   value={this.state.answer}
                   onChange={this.update}
            />

        return(
            <div className="verse-index-item">
                <p className="verse-question-label">Question #{this.props.qnum + 1}</p>
                <li>{verse.verse}</li>
                {answerInput}
                {correctAnswer}
            </div>
        )
    }
}

export default VerseIndexItem