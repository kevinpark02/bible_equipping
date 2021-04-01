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
            <Link to={`/quizzes/${quiz.id}`}>
                <div className="quiz-line-item">
                    <li>{quiz.book}</li>
                    <p className="quiz-score">{quiz.score} / 10</p>
                    <p className="quiz-percentage">{Math.round((quiz.score / 10) * 1000) / 10}%</p>
                    {this.dateFormat(quiz.created_at)}
                </div>
            </Link>
        )
    }
}

export default QuizIndexItem;
