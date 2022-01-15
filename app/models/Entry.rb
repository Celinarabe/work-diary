class Entry < ApplicationRecord
    validates :author, presence: true
    validates :date, presence: true

    has_many :tasks, dependent: :destroy
  end