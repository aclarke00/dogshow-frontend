class DogsController < ApplicationController

    before_action :authorized, only: [:create]


    def create
        dog = Dog.create(dog_params)
        render json: @dog
    end

    def dog_params
        params.permit(:name, :breed, :size, :commands, :tricks, :image_url, :user_id)
    end


end
