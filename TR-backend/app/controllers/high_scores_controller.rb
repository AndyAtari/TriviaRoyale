class HighScoresController < ApplicationController

    def index
        @scores = HighScore.all 
        render json: @scores, except: [:created_at, :updated_at]
    end

    def create
        @score = HighScore.create(highscores_params)
        render json: @score 
    end



    private
    def highscores_params
        params.require(:high_score).permit(:score, :user)
    end
end
