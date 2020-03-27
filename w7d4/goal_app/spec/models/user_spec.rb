require 'rails_helper'

RSpec.describe User, type: :model do
 subject(:user) {FactoryBot.create(:user)}
  it {should validate_presence_of(:username)}
  it {should validate_uniqueness_of(:username)}

  it {should validate_presence_of(:password_digest)}

  # it {should validate_presence_of(:session_token)}
  it {should validate_uniqueness_of(:session_token)}

  it {should validate_length_of(:password).is_at_least(6)}

  it 'should validate presence of session_token' do
    FactoryBot.create(:user)
    expect(user.session_token).to_not be_nil
  end
 
  describe '::find_by_credentials' do
    it 'should find the correct user' do
      user1 = User.create!(username:'peter', password:'password')
      user = User.find_by_credentials('peter', 'password')
      expect(user.username).to eq('peter')
    end
  end

end


