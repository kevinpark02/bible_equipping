# == Schema Information
#
# Table name: collections
#
#  id         :bigint           not null, primary key
#  book       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Collection < ApplicationRecord
    validates :book, presence: true, uniqueness: true

    has_many :quizzes,
        primary_key: :id,
        foreign_key: :collection_id,
        class_name: :Quiz
end
