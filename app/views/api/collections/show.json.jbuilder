json.collection do 
    json.set! @collection.id do
        json.partial! 'collection', collection: @collection
    end
end