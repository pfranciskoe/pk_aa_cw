class SessionsController < ApplicationController
    
    def new
        render :new
    end
    def create
        user = User.find_by_credentials(params[:user][:username],params[:user][:password])
        if user
            login!(user)
            redirect_to goals_url
        else
            render :new
            flash.now[:errors] = 'enter vaild params'
        end
    end

    def destroy
        logout!
        redirect_to new_session_url
    end

end
