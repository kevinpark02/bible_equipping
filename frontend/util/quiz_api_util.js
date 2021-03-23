export const createQuiz = (quiz) => {
  return $.ajax({
    url: `/api/quizzes`,
    method: "POST",
    data: { quiz },
  });
};

export const fetchQuiz = (quizIde) => {
  return $.ajax({
    url: `/api/quizzes/${quizId}`,
    method: "GET"
  });
};

