Rails.application.routes.draw do
  root 'api/greetings#index'
  namespace :api do
    get 'greetings/random_greeting', to: 'greetings#random_greeting'
  end
end
