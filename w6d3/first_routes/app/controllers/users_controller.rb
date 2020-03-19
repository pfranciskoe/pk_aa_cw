class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def create
        user = User.new(params.require(:user).permit(:email,:name))

        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        render json: params['id']
    end
    def update
        user = User.update(params['id'],{:name=>params['user']['name'],:email=>params['user']['email']})
        render json: user
    end
end