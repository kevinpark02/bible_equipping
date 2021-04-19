class Api::CollectionsController < ApplicationController
    before_action :require_logged_in, only: [:show, :create]

    def show
        @collection = Collection.includes(:quizzes).find_by(id: params[:id])
    end

    def create
        @collection = Collection.new(collection_params)

        if @collection.save
            render :show
        else
            render json: @collection.errors.full_messages, status: 422
        end
    end

    private

    def collection_params
        params.require(:collection).permit(:book, :user_id)
    end
end
