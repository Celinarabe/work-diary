require 'date'

class Entry < ApplicationRecord
    validates :author, presence: true
    validates :date, presence: true

    has_many :tasks, dependent: :destroy

    before_validation :ensure_date

    def as_json(options={})
        { :date => self.date,
          :author => self.author
        }
    end

    private
      def ensure_date
        if date.nil?
          self.date = DateTime.now()
        end
      end
  end