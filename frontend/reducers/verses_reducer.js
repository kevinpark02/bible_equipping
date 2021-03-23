import { RECEIVE_VERSE } from '../actions/verse_actions';

const versesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_VERSE:
            return Object.assign(nextState, action.verse)
        case RECEIVE_QUIZ:
            return Object.assign(nextState, action.quiz.verses)
        default:
            return state;
    }
}

export default versesReducer;