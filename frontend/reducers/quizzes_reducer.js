import { RECEIVE_QUIZ, RECEIVE_CURRENT_QUIZ } from "../actions/quiz_actions";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const quizzesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_QUIZ:
            return Object.assign(nextState, action.quiz.quiz)
        case RECEIVE_CURRENT_QUIZ:
            return action.quiz.quiz
        case RECEIVE_CURRENT_USER:
            return Object.assign(nextState, action.currentUser.quizzes)
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default quizzesReducer