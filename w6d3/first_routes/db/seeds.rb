# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user_1 = User.create!(user_name: 'Pablo')
user_2 = User.create!(user_name: 'Claude')
user_3 = User.create!(user_name: 'Marcel')
user_4 = User.create!(user_name: 'Peter')

Artwork.destroy_all
art_1 = Artwork.create!(title:'painting of a war',
    image_url:'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555443607/shape/mentalfloss/98645794uhye.png?itok=SV6LuVlJ',
    artist_id: user_1.id)
art_2 = Artwork.create!(title:'colorful pond',
    image_url:'https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_1200/v1541799560/photos/285351_original.jpg',
    artist_id: user_2.id)
art_3 = Artwork.create!(title:'toilet',
    image_url:'https://uploads6.wikiart.org/00177/images/marcel-duchamp/fountain.jpg',
    artist_id: user_3.id)
art_4 = Artwork.create!(title:'painting of a boat',
    image_url:'https://i.pinimg.com/originals/16/76/bf/1676bfb8e474c6604e190ca9de2143a5.jpg',
    artist_id: user_4.id)
ArtworkShare.destroy_all
ArtworkShare.create!(artwork_id:art_4.id,viewer_id:user_2.id)
ArtworkShare.create!(artwork_id:art_4.id,viewer_id:user_3.id)
ArtworkShare.create!(artwork_id:art_2.id,viewer_id:user_3.id)
ArtworkShare.create!(artwork_id:art_1.id,viewer_id:user_4.id)
ArtworkShare.create!(artwork_id:art_3.id,viewer_id:user_1.id)
ArtworkShare.create!(artwork_id:art_2.id,viewer_id:user_1.id)
