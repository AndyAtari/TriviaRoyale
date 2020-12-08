class QuestionsController < ApplicationController

    # def index
    #     if params[:category_id]
    #         @questions = Category.find(params[:category_id]).questions
    #         render json: @questions, except: [:created_at, :updated_at]
    #     else 
    #     @questions = Question.all 
    #     render json: @questions, except: [:created_at, :updated_at] 
    #     end
    # end

    # def show
    #     @category = Category.find(params[:category_id])
    #     @question = @category.questions.find(params[:id])
    #     render json: @question, except: [:created_at, :updated_at] 
    # end
        

end

