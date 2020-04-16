class User < ApplicationRecord
    has_many :dogs
    validates :username, uniqueness: true
    has_secure_password

end
