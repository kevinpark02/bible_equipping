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
require 'test_helper'

class VerseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
