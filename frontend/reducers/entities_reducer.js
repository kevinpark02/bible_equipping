import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import quizzesReducer from "./quizzes_reducer";
import versesReducer from "./verses_reducer";
import collectionsReducer from "./collections_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  collection: collectionsReducer,
  quizzes: quizzesReducer,
  verses: versesReducer,
});

export default entitiesReducer;
