class Api::QuizzesController < ApplicationController

    before_action :require_logged_in, only: [:show, :create, :update]

    def show
        @quiz = Quiz.includes(:verses).find_by(id: params[:id])
    end

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

        if @quiz && @quiz.update(quiz_params)
            render :show
        else
            render json: @quiz.errors.full_messages, status: 422
        end
    end

    private

    def quiz_params
        params.require(:quiz).permit(:book, :score, :user_id, :submitted)
    end

end
