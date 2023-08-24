# frozen_string_literal: true
module Api
  class GreetingsController < ApplicationController
    def index
      render 'index'
    end

    def random_greeting
      random_message = Message.order('RANDOM()').first
      render json: { greeting: random_message }
    end
  end
end
