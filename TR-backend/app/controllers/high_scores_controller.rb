class HighScoresController < ApplicationController

    def index
        @scores = HighScore.all 
        render json: @scores, except: [:created_at, :updated_at]
    end
end
