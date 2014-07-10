class RoomsController < ApplicationController

  def index
    rooms = Room.all 
    render json: rooms.to_json

  end


end

