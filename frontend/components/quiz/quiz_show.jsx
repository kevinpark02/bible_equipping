import React from 'react';

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

        if (verses === undefined || quiz === undefined) {
            return null;
        }
        
        return(
            <div>
                {verses.map(verse => {
                    return verse.verse
                })}
            </div>
        )
    }
}

export default QuizShow