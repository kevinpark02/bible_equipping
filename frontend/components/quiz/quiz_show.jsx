import React from 'react';
import VerseIndexItem from "../../components/verse/verse_index_item";

class QuizShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.quizId,
            submitted: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
            .then(this.props.fetchQuiz(this.props.quizId))
    }

    handleSubmit(count) {
        let nextState = Object.assign({}, this.state);
        nextState["score"] = count;
        this.props.updateQuiz(nextState)
            .then(() => this.props.history.push(`/home`));
    }


    render() {
        const verses = this.props.verses
        const quiz = this.props.quiz
        let count = 0;
        return(
            <div className="quiz-questions-container">
                <ul>
                    {verses.map(verse => {
                        if (verse.chapter === verse.answer) {
                            count += 1
                        }
                        return(
                            <VerseIndexItem verse={verse}
                                            key={verse.id}
                                            quiz={quiz}
                                            updateVerse={this.props.updateVerse}
                                            />
                        )
                    })}
                </ul>
                <button onClick={() => this.handleSubmit(count)}
                        className="green-btn">
                    Submit Quiz
                </button>
            </div>
        )
    }
}

export default QuizShow