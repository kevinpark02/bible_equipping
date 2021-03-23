import { RECEIVE_QUIZ } from "../actions/quiz_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const quizzesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_QUIZ:
            return Object.assign(nextState, action.quiz.quiz)
        case RECEIVE_CURRENT_USER:
            return Object.assign(nextState, action.currentUser.quizzes)
        default:
            return state;
    }
}

export default quizzesReducer