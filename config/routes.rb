Rails.application.routes.draw do
  resources :states
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope :api, defaults: {format: :json} do
    resources :states #, except: [:new, :edit]
    resources :cities    
  end

  get '/ui' => 'ui#index'
  # get '/ui#' => 'ui#index'
  root 'ui#index'
end
