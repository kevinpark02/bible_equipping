import React from 'react'
import QuizIndexItem from "./quiz_index_item";

class QuizIndex extends React.Component  {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        if (!this.props.quizzes === undefined) {
            return null
        }

        const quizzes = this.props.quizzes
        return(
            <div className="quiz-list-container">
                <div className="quiz-header">
                    <p>Book Name</p>
                    <p>Score</p>
                    <p>Percentage</p>
                    <p>Date Created</p>
                </div>
                <ul className="quiz-list">
                    {quizzes.map(quiz => {
                        return(
                            <QuizIndexItem quiz={quiz}
                                           key={quiz.id}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default QuizIndex;
