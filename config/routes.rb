Rails.application.routes.draw do
  resources :scorms, only: [:create]

  root "scorms#index"
end
