import { RECEIVE_PSALM, RECEIVE_ISAIAH, RECEIVE_PROVERBS } from "../actions/home_actions";

const initialState = {
    home: true,
    splash: "psalm"
};

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PSALM:
            return Object.assign({}, state, { splash: "psalm" });
        case RECEIVE_ISAIAH:
            return Object.assign({}, state, { splash: "isaiah" });
        case RECEIVE_PROVERBS:
            return Object.assign({}, state, { splash: "proverbs" });
        default:
            return state;
    }
};

export default loadingReducer;
