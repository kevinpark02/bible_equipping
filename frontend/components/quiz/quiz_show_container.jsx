import { connect } from 'react-redux';
import { fetchQuiz } from "../../actions/quiz_actions";
import { fetchUser } from "../../actions/session_actions";
import QuizShow from "./quiz_show";

const mapStateToProps = (state, ownProps) => {
    return({
        quiz: state.entities.quizzes[ownProps.match.params.quizId],
        quizId: ownProps.match.params.quizId,
        verses: Object.values(state.entities.verses),
        userId: state.session.id
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchQuiz: (quizId) => dispatch(fetchQuiz(quizId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizShow)