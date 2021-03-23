json.partial! 'quiz', quiz: @quiz

json.verses do
    @quiz.verses.each do |verse|
        json.set! verse.id do
            json.extract! verse, :id, :verse, :chapter, :quiz_id
        end
    end
end