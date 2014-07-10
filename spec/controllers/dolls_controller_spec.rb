require 'rails_helper'

RSpec.describe DollsController, :type => :controller do 
  it "has an index page that works" do 
    get :index
    expect(response.code).to eq "200"
  end
end