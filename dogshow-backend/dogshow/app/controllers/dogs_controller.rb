class DogsController < ApplicationController

    before_action :authorized, only: [:create]


    def create
        dog = Dog.create(dog_params)
        render json: dog
    end

    def update
        dog = Dog.find(params[:id])
        dog.update(dog_params)
        render json: dog
    end

    def destroy
        dog = Dog.find(params[:id])
        dog.destroy
    end



    def dog_params
        params.permit(:name, :breed, :size, :commands, :tricks, :image_url, :user_id)
    end


end
