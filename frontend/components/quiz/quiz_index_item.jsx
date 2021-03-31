import React from 'react';
import { Link } from 'react-router-dom';

class QuizIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    dateFormat(date){
        let idx = date.indexOf("T");
        return date.slice(0, idx);
    }

    render() {
        const quiz = this.props.quiz;
        return(
            <div className="quiz-line-item">
                <Link to={`/quizzes/${quiz.id}`}>
                    <li>
                        {quiz.book}
                    </li>
                </Link>
                <p>5</p>
                {this.dateFormat(quiz.created_at)}
            </div>
        )
    }
}

export default QuizIndexItem;
