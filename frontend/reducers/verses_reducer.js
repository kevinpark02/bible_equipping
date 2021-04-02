import { RECEIVE_VERSE } from '../actions/verse_actions';
import { RECEIVE_CURRENT_QUIZ } from "../actions/quiz_actions";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const versesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_VERSE:
            nextState[action.verse.id] = action.verse
            return nextState
        case RECEIVE_CURRENT_QUIZ:
            if (action.quiz.verses === undefined) {
                return {}
            } else {
                return action.quiz.verses
            }
        case RECEIVE_CURRENT_USER:
            return {}
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default versesReducer;