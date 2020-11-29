class CategoriesController < ApplicationController

    def index
        # if params[:category_id]
        #     @categories = Question.find(params[:category_id])
        # end
        @categories = Category.all 
        render json: @categories 
    end
end
