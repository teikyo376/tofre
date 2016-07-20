Rails.application.routes.draw do
  devise_for :users
  root 'top#index'
  get 'top/show'

  resources :donuts do
    collection {get "search", "myfavo", "mydonut"}
    member {get "fab","unfab"}
  end
  resources :refrigerators do
      collection {get "delete"}
      member {get "switching"}
  end
  resources :bulletin_boards
end
