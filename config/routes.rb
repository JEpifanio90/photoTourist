Rails.application.routes.draw do
  resources :states
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'ui#index'
  get '/ui' => 'ui#index'
  scope :api, defaults: {format: :json} do
    resources :states #, except: [:new, :edit]
    resources :cities    
  end
end
