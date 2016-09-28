Rails.application.routes.draw do
  devise_for :users
  root 'top#index'
  get 'top/show'

  resources :donuts do
    collection {get "search", "myfavo", "mydonut"}
    member {get "fab","unfab"}
  end
  resources :refrigerators do
<<<<<<< HEAD
    collection {get "delete"}
    member {get "switching"}
  end
  resources :top do
    member {get "follow","nofollow","refollow","norefollow","block"}
=======
      collection {get "delete"}
      member {get "switching"}
>>>>>>> origin/master
  end
  resources :bulletin_boards
end
