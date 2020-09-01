Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :recipes, except: [:new, :edit]
    end
  end

  root 'main#index'

  get '/*path' => 'main#index'
end
