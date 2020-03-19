# == Schema Information
#
# Table name: users
#
#  id    :bigint           not null, primary key
#  name  :string           not null
#  email :string           not null
#
class User < ApplicationRecord
validates :user_name, presence: true, uniqueness: true

end
