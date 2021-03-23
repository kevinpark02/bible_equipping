import React from 'react';

class QuizIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const quiz = this.props.quiz;
        return(
            <div>
                <li>{quiz.book}</li>
            </div>
        )
    }
}

export default QuizIndexItem;
