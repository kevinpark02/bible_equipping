import { connect } from 'react-redux';
import { fetchQuiz, updateQuiz } from "../../actions/quiz_actions";
import { updateVerse } from "../../actions/verse_actions";
import { fetchUser } from "../../actions/session_actions";
import QuizShow from "./quiz_show";

const mapStateToProps = (state, ownProps) => {
    return({
        quiz: state.entities.quizzes[ownProps.match.params.quizId],
        quizId: ownProps.match.params.quizId,
        verses: Object.values(state.entities.verses),
        userId: state.session.id,
        loading: state.ui.loading.verseMaking
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchQuiz: (quizId) => dispatch(fetchQuiz(quizId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        updateQuiz: (quiz) => dispatch(updateQuiz(quiz)),
        updateVerse: (verse) => dispatch(updateVerse(verse))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizShow)