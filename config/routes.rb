# frozen_string_literal: true

Rails.application.routes.draw do
  get 'root/index'
  root 'root#index'
  namespace :api do
    get 'greetings/random_greeting', to: 'greetings#random_greeting', defaults: { format: 'json' }
  end
end
