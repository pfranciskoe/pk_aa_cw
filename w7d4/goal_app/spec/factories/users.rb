FactoryBot.define do
  factory :user do
    username { Faker::Games::Pokemon.name }
    password { 'password' } 
  end
end



        # username { Faker::Movies::HarryPotter.character } #generates a random username
        # email { Faker::Internet.email }
        # password { 'password' }
        # age { 5 }
        # political_affiliation { Faker::Movies::HarryPotter.house }