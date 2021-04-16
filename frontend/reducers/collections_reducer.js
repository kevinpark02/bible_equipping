import { RECEIVE_COLLECTION, RECEIVE_CURRENT_COLLECTION } from "../actions/collection_actions";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const collectionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_COLLECTION:
            return Object.assign(nextState, action.collection)
        case RECEIVE_CURRENT_COLLECTION: 
            return action.collection
        case RECEIVE_CURRENT_USER:
            return Object.assign(nextState, action.currentUser.collections)
        case LOGOUT_CURRENT_USER:
            return {}
        default: 
            return state;
    }
}

export default collectionsReducer;