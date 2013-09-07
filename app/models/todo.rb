class Todo < ActiveRecord::Base
  attr_accessible :completed, :text
end
