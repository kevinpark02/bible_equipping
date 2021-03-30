import { RECEIVE_VERSE } from '../actions/verse_actions';
import { RECEIVE_CURRENT_QUIZ } from "../actions/quiz_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const versesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_VERSE:
            // debugger
            nextState[action.verse.id] = action.verse
            return nextState
            // return Object.assign(nextState, action.verse)
        case RECEIVE_CURRENT_QUIZ:
            if (action.quiz.verses === undefined) {
                return {}
            } else {
                return action.quiz.verses
            }
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default versesReducer;