# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  url        :string
#  content    :text
#  sub_id     :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :title, :sub_id, :author_id, presence: true

    belongs_to :sub,
        foreign_key: :sub_id,
        class_name: :Sub,
        dependent: :destroy
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    has_many :sub_memberships,
        foreign_key: :post_id,
        class_name: :PostSub
    has_many :subs,
        through: :sub_memberships,
        source: :sub
end
