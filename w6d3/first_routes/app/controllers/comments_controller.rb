class CommentsController < ApplicationController
    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json:comment
        else
            render comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy  
        render json:comment
    end

    def index
        if comment_params
        render json:Comment.all
    end

    private
    def comment_params
        params.require(:comment).permit(:body,:user_id,:artwork_id)
    end
end
