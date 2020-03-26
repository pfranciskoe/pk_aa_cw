class SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
        if @user.nil?
            render :new
            flash.now[:errors] = ["Incorrect username and/or password"]
        else 
            login_user!(@user)
            redirect_to bands_url
        end
    end

    def new
        render :new
    end

    def destroy
        logout!
        redirect_to new_session_url
    end
end
