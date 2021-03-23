import * as QuizApiUtil from "../util/quiz_api_util";

export const RECEIVE_QUIZ = "RECEIVE_QUIZ";

export const receiveQuiz = (quiz) => {
  return {
    type: RECEIVE_QUIZ,
    quiz,
  };
};

export const createQuiz = (quiz) => (dispatch) => {
  return QuizApiUtil.createQuiz(quiz)
    .then((quiz) => dispatch(receiveQuiz(quiz))
  );
};

export const fetchQuiz = (quizId) => (dispatch) => {
  return QuizApiUtil.fetchQuiz(quizId)
    .then(quiz => dispatch(receiveQuiz(quiz)))
}