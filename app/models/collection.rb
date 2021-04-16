# == Schema Information
#
# Table name: collections
#
#  id         :bigint           not null, primary key
#  book       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
class Collection < ApplicationRecord
    validates :book, :user_id, presence: true, uniqueness: true

    has_many :quizzes,
        primary_key: :id,
        foreign_key: :collection_id,
        class_name: :Quiz

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
