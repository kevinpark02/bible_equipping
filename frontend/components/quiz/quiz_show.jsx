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
        
        return(
            <ul>
                {verses.map(verse => {
                    return(
                        <li key={verse.id}>
                            {verse.verse}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default QuizShow