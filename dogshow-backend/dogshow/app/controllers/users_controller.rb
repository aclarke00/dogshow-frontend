class UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def persist 
        passport = encode_token({user_id: @user.id})
        render json: {user: UserSerializer.new(@user), token: passport}
    end

    def create 
        @user = User.create(user_params)
        if @user.valid?
            passport = encode_token({user_id: @user.id})
            render json: {user: UserSerializer.new(@user), token: passport}
        else  
            render json: {message: "Invalid username"}
        end
    end

    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            passport = encode_token({user_id: @user.id})
            render json: {user: UserSerializer.new(@user), token: passport}
        else  
            render json: {message: "Invalid username or password"}   
        end 
    end


    private

    def user_params
        params.permit(:username, :password)
    end


end
