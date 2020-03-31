class SubsController < ApplicationController
    before_action :require_logged_in!
    before_action :require_moderator, only: [:edit, :update, :destroy]
    def index
        @subs = Sub.all
        render :index
    end

    def show
        @sub = Sub.find_by(id:params[:id])
        render :show
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.moderator_id = current_user.id
        if @sub.save
            redirect_to sub_url(@sub.id)
        else
            flash[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def new
        render :new
    end

    def update

        @sub = Sub.find_by(id:params[:id])
        if @sub && @sub.update_attributes!(sub_params)
            redirect_to sub_url(@sub.id)
        else
            flash[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    def edit
        @sub = Sub.find_by(id:params[:id])
        render :edit
    end

    def destroy
       @sub = Sub.find_by(id:params[:id])
       return nil if @sub.nil?
       @sub.destroy
       redirect_to subs_url 
    end

    private
    def sub_params
        params.require(:sub).permit(:title,:description)
    end
    def require_moderator
        @sub = Sub.find_by(id:params[:id])
        @sub.moderator_id == current_user.id
    end
end
