import { connect } from 'react-redux';
import { createQuiz } from '../../actions/quiz_actions';
import { fetchVerse } from "../../util/esv_api_util";
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
        createQuiz: (quiz) => dispatch(createQuiz(quiz)),
        fetchVerse: (verse) => dispatch(fetchVerse(verse)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm)