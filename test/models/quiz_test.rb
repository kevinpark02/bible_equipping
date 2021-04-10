# == Schema Information
#
# Table name: quizzes
#
#  id            :bigint           not null, primary key
#  book          :string           not null
#  score         :integer
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  submitted     :boolean          default(FALSE), not null
#  collection_id :integer          not null
#
require 'test_helper'

class QuizTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
