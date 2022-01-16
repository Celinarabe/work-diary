class Task < ApplicationRecord
    validates :body, presence: true

    belongs_to :entry
    has_many :task_labels, dependent: :destroy
    has_many :labels, through: :task_labels

    def as_json(options={})
        { :body => self.body
        }
    end

end