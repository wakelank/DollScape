class DollsController < ApplicationController

  def index
    @doll = Doll.first.to_json
    #render json: dolls.to_json
  end

  def create
    new_doll = Doll.create(doll_params)

    redirect_to root_path
  end

  def show
    doll = Doll.find(params[:id])
    render json: doll.to_json
  end

  def update
    doll = Doll.find(params[:id])
    doll.update(doll_params)
    redirect_to index
  end

  def destroy
    Doll.delete(params[:id])
    redirect_to root
  end

  private
  def doll_params
    doll_params = params.require(:doll).permit(:name,:xPos, :yPos, :color)
  end
end
