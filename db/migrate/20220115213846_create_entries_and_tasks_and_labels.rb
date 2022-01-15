class CreateEntriesAndTasksAndLabels < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.string :author
      t.datetime :date
      t.timestamps
    end

    create_table :tasks do |t|
      t.string :body
      t.references :entry, null: false, foreign_key: true

      t.timestamps
    end


    create_table :labels do |t|
      t.string :body
      t.timestamps
    end

    create_table :task_labels do |t|
      t.belongs_to :task
      t.belongs_to :label
    end
  end
end
