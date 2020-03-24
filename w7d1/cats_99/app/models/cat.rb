# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'date'

class Cat < ApplicationRecord
    validates :birth_date, :name, :sex, :color, presence: true
    def age
        @age = ((Date.today - birth_date)/365).to_i.to_s
    end

   

end
