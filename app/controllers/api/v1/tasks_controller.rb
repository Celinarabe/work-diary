module Api
  module V1
    class TasksController < ActionController::API
      def index
        render :json => Task.all
      end

      def show
        @task = Task.find(params[:id])
        render :json => @task
      end

      def create
        @entry = Entry.find(params[:entry_id])
        @task = Task.new(task_params)
        if @entry.tasks.push(@task)
          render :json => @entry
        else
          render json: errors(entry), status: 422
        end
      end
      private

      def task_params
        params.permit(:body)
      end
    end
    end
  end

