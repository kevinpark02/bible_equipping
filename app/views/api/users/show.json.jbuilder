json.partial! 'api/users/user', user: @user

json.quizzes do 
    @user.quizzes.each do |quiz|
        json.set! quiz.id do
            json.extract! quiz, :id, :book, :score, :user_id, :submitted, :created_at
        end
    end
end

json.collections do 
    @user.collections.each do |collection|
        json.set! collection.id do
            json.extract! collection, :id, :book, :user_id
        end
    end
end