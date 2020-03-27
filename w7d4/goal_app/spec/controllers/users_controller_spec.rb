require 'rails_helper'

RSpec.describe UsersController, type: :controller do


    describe 'GET #new' do 

        it 'renders a new user page' do
            get :new
            expect(response).to render_template('new')
            expect(response).to have_http_status(200)
        end

    end


    describe 'POST #create' do

        context 'with valid params' do
            it 'redirects to goals page' do
                post :create, params: {user: {username: 'Charles', password: 'password'}}
                expect(response).to redirect_to(goals_url)
            end
        end
        
        context 'with invalid params' do
            it 'verifies username and password' do
                post :create, params: {username: 'charles'}
                expect(response).to render_template('new')
                expect(flash[:errors]).to be_present
            end
        end
    end



end
