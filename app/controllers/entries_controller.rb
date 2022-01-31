class EntriesController < ActionController::API

  def index
      render :json => Entry.all
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
    def entry_params
      params.permit(:author, :date)
    end

    def errors(record)
      { errors: record.errors.messages }
    end


end

