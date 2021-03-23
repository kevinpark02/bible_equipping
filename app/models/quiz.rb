# == Schema Information
#
# Table name: quizzes
#
#  id         :bigint           not null, primary key
#  book       :string           not null
#  score      :integer
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Quiz < ApplicationRecord
    validates :book, :user_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :verses,
        primary_key: :id,
        foreign_key: :quiz_id,
        class_name: :Verse
end
