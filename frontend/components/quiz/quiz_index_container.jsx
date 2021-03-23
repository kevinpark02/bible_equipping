import { connect } from 'react-redux';
import QuizIndex from './quiz_index';

import { fetchUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return({
        userId: state.session.id,
        quizzes: Object.values(state.entities.quizzes)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchUser: (user) => dispatch(fetchUser(user))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizIndex)