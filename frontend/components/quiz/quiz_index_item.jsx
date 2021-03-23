import React from 'react';
import { Link } from 'react-router-dom';

class QuizIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const quiz = this.props.quiz;
        return(
            <div>
                <Link to={`/quizzes/${quiz.id}`}>
                    <li>{quiz.book}</li>
                </Link>
            </div>
        )
    }
}

export default QuizIndexItem;
