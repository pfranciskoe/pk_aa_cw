require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
    scenario 'has a new user page' do
        visit new_user_url
        expect(page).to have_content 'Sign Up!'
    end
    feature 'signing up a user' do
        before(:each) do
        visit new_user_url
        fill_in 'Username', with: 'qwerty'
        fill_in 'Password', with: 'password'
        click_on 'Create User'
        end
        scenario 'shows username on the homepage after signup' do
            expect(page).to have_content('qwerty')
        end
    end
end

feature 'logging in' do
   
    scenario 'shows username on the homepage after login' do
    visit new_user_url
    fill_in 'Username', with: 'qwerty'
    fill_in 'Password', with: 'password'
    click_on 'Create User'
    visit new_session_url
    fill_in 'user[username]', with: 'qwerty'
    fill_in 'user[password]', with: 'password'
    click_on 'Login'
    expect(page).to have_content 'qwerty'
    end

end

feature 'logging out' do
  scenario 'begins with a logged out state' do
    visit goals_url
    expect(current_user).to be nil
  end

    scenario 'doesn\'t show username on the homepage after logout' do
        visit new_session_url
        fill_in 'Username', with: 'qwerty'
        fill_in 'Password', with: 'password'
        click_on "Login"
        click_on "logout"
        expect(page).to not_have_content('qwerty')
    end

end

