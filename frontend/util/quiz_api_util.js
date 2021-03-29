export const createQuiz = (quiz) => {
  return $.ajax({
    url: `/api/quizzes`,
    method: "POST",
    data: { quiz },
  });
};

export const fetchQuiz = (quizId) => {
  return $.ajax({
    url: `/api/quizzes/${quizId}`,
    method: "GET"
  });
};

export const updateQuiz = (quiz) => {
  return $.ajax({
    url: `/api/quizzes/${quiz.id}`,
    method: "PATCH",
    data: {quiz}
  });
};

