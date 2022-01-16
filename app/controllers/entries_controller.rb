class EntriesController < ApplicationController

    def index
        render :json => Entry.all
    end
  
    def show
      @entry = Entry.find(params[:id])
      render :json => @entry
    end
end