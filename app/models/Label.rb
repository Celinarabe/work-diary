class Label < ApplicationRecord
    validates :body, presence: true, length: { maximum: 25 }
  
    has_many :task_labels, dependent: :destroy
    has_many :tasks, through: :task_labels
  end