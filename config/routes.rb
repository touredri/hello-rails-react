Rails.application.routes.draw do
  namespace :api do
    get 'greetings/random_greeting', to: 'greetings#random_greeting', defaults: { format: 'json' }
  end
  root 'api/greetings#index'
end
