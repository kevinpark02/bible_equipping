import React from 'react';
import VerseIndexItem from "../../components/verse/verse_index_item";

class QuizShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
            .then(this.props.fetchQuiz(this.props.quizId))
    }

    render() {
        const verses = this.props.verses
        const quiz = this.props.quiz
        return(
            <div>
                <ul>
                    {verses.map(verse => {
                        return(
                            <VerseIndexItem verse={verse}
                                            key={verse.id}
                                            quiz={quiz}
                                            />
                        )
                    })}
                </ul>
                <button>Submit Quiz</button>
            </div>
        )
    }
}

export default QuizShow