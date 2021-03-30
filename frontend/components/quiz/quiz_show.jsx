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

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateQuiz(this.state);
    }

    render() {
        const verses = this.props.verses
        const quiz = this.props.quiz
        let count = 0;
        return(
            <div>
                {count}
                <ul>
                    {verses.map(verse => {
                        if (verse.chapter === verse.answer) {
                            count += 1;
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
                <button onClick={this.handleSubmit}>Submit Quiz</button>
            </div>
        )
    }
}

export default QuizShow