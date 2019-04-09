Rails.application.routes.draw do
  get '/' => 'tasks#index'
  get '/tasks' => 'tasks#index'
end
