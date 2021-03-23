class Api::VersesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def create
        @verse = Verse.new(verse_params)

        if @verse.save
            render :show
        else
            render json: @verse.errors.full_messages, status: 422
        end
    end

    private

    def verse_params
        params.require(:verse).permit(:verse, :chapter, :quiz_id)
    end
end
