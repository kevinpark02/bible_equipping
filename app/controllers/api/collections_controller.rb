class Api::CollectionsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def create
        @collection = Collection.new(collection_params)

        if @collection.save
            render :show
        else
            render json: @quiz.errors.full_messages, status: 422
        end
    end

    private

    def collection_params
        params.require(:collection).permit(:book)
    end
end
