# == Schema Information
#
# Table name: users
#
#  id        :bigint           not null, primary key
#  user_name :string           not null
#
class User < ApplicationRecord
validates :user_name, presence: true, uniqueness: true
    has_many :artworks,
    foreign_key: :artist_id,
    class_name: :Artwork
    has_many :views,
    foreign_key: :viewer_id,
    class_name: :ArtworkShare
    has_many :shared_viewers,
    through: :views,
    source: :viewer
    has_many :shared_artworks,
    through: :views,
    source: :artwork
    has_many :comments,
    foreign_key: :user_id,
    class_name: :Comment
end
er