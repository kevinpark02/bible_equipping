import { RECEIVE_QUIZ } from "../actions/quiz_actions";

const quizzesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_QUIZ:
            return Object.assign(nextState, action.quiz.quiz)
        default:
            return state;
    }
}

export default quizzesReducer