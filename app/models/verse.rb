# == Schema Information
#
# Table name: verses
#
#  id         :bigint           not null, primary key
#  verse      :string           not null
#  chapter    :integer          not null
#  quiz_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Verse < ApplicationRecord
    validates :verse, :chapter, :quiz_id, presence: true

    belongs_to :quiz,
        primary_key: :id,
        foreign_key: :quiz_id,
        class_name: :Quiz
end
