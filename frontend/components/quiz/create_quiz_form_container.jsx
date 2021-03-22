import { connect } from 'react-redux';
import { createQuiz } from '../../actions/quiz_actions';
import QuizForm from './quiz_form';

const mapStateToProps = (state) => {
    return({
        quiz: {
            book: "",
            user_id: state.session.id
        }
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        createQuiz: (quiz) => dispatch(createQuiz(quiz))
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm)