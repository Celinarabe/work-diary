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
    end
  end
end