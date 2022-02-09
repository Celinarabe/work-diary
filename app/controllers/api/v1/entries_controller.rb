module Api
  module V1
    class EntriesController < ActionController::API

      def index
          @entries = Entry.all
          render :json => getTasks(@entries)
      end

      def show
        @entry = Entry.find(params[:id])
        render :json => @entry #idk this syntax D:
      end

      def create
        entry = Entry.new(entry_params)
        
        if entry.save
          render json: entry
        else
          render json: errors(entry), status: 422
        end
      end

      private

        def getTasks(entries)
          result = []
          entries.each do | entry|
            result.push({
              id: entry.id,
              date: entry.date,
              tasks: entry.tasks.map { |task| task.body },
            })
          end
          return result
        end

        def entry_params
          params.permit(:author, :date, tasks_attributes: [  :id, :body ] )
        end

        def errors(record)
          { errors: record.errors.messages }
        end

        
      end

    end
  end

