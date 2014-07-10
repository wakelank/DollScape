class ItemsController < ApplicationController

  def show
    room = Room.find(params[:id])
    items = room.items
    render json: items.to_json
  end

  def create
    new item = Item.create(item_params)
    redirect_to "/dolls/index"
  end

  def update 
    item = Item.find(params[:id])

    item.update(item_params)
  end

  def destroy
    Item.delete(params[:id])
  end
end

private 
def item_params
  item_params = params.require(:doll).permit(:type, :color)
end
