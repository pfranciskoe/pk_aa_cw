class PostsController < ApplicationController
    before_action :require_author, only:[:edit, :update, :destroy]

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)
            params[:post][:sub_ids].each do |sub_id|
                @post.subs = Sub.find_by(id: sub_id)
            end
        if @post.save
            redirect_to post_url(@post.id)
        else
            flash[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def new
        render :new
    end

    def edit
        @post = Post.find_by(id: params[:id])
        render :edit
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update_attributes!(post_params)
            redirect_to post_url(@post.id)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :new 
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        return nil if @post.nil?
        @post.destroy
        redirect_to subs_url
    end

    private
    def post_params
        params.require(:post).permit(:title,:url,:content)
    end

    def require_author
        @post = Post.find_by(id: params[:id])
        @post.author_id == current_user.id
    end
end
