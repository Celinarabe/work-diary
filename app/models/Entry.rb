class Entry < ApplicationRecord
    validates :author, presence: true
    validates :date, presence: true

    has_many :tasks, dependent: :destroy

    def as_json(options={})
        { :date => self.date,
          :author => self.author
          # :tasks => self.tasks 
        }
    end
  end