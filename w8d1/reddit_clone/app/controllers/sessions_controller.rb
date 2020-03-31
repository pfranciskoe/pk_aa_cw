class SessionsController < ApplicationController

    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:username],params[:user][:password])
        if @user
            log_in!(@user)
            redirect_to subs_url
        else
            flash.now[:errors] = ['invalid credentials']
            render :new
        end
    end
    
    def destroy
        if logged_in?
            log_out!
            render :new
        end
    end


end
