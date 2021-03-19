export const createQuiz = (quiz) => {
  return $.ajax({
    url: `/api/quizzes`,
    method: "POST",
    data: { quiz },
  });
};
