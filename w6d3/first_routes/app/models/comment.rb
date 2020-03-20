# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  user_id    :integer          not null
#  artwork_id :integer          not null
#
class Comment < ApplicationRecord
    belongs_to :user,
    foreign_key: :user_id,
    dependent: :destroy
 
    belongs_to :artwork,
    foreign_key: :artwork_id,
    dependent: :destroy
end
