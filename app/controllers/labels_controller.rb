class LabelsController < ApplicationController
  def index
    render :json => Label.all
  end

  def show
    @label = Label.find(params[:id])
    render :json => @label
  end
end