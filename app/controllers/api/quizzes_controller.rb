class Api::QuizzesController < ApplicationController

    before_action :require_logged_in, only: [:create, :update]

    def create
        @quiz = Quiz.new(quiz_params)

        if @quiz.save
            render :show
        else
            render json: @quiz.errors.full_messages, status: 422
        end
    end

    def update
        @quiz = Quiz.find_by(id: params[:id])

        if @quiz && @quix.update(quiz_params)
            render :show
        else
            render json: @quiz.errors.full_messages, status: 422
        end
    end

    private

    def quiz_params
        params.require(:quiz).permit(:book, :score, :user_id)
    end

end
