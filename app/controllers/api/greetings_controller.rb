class Api::GreetingsController < ApplicationController
  def index
  end

  def random_greeting
    random_message = Message.order('RANDOM()').first
    render json: { greeting: random_message }
  end
end
