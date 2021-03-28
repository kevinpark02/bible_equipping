json.quiz do
    json.set! @quiz.id do
        json.partial! 'quiz', quiz: @quiz
    end
end

json.verses do
    @quiz.verses.each do |verse|
        json.set! verse.id do
            json.extract! verse, :id, :verse, :chapter, :quiz_id, :submitted
        end
    end
end