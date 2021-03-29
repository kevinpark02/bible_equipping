json.partial! 'api/users/user', user: @user

json.quizzes do 
    @user.quizzes.each do |quiz|
        json.set! quiz.id do
            json.extract! quiz, :id, :book, :score, :user_id, :submitted
        end
    end
end