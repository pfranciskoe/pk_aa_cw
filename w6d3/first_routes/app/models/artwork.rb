# == Schema Information
#
# Table name: artworks
#
#  id        :bigint           not null, primary key
#  title     :string           not null
#  image_url :string           not null
#  artist_id :integer          not null
#
class Artwork < ApplicationRecord
    validates :artist_id, presence: true, uniqueness: {scope: :title, 
        message: "one artist cant have two paintings called that"}
    validates :image_url, presence: true
    validates :title, presence: true
    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User
    has_many :shares,
    foreign_key: :artwork_id,
    class_name: :ArtworkShares
    has_many :comments,
    foreign_key: :artwork_id,
    class_name: :Comment
    
end
