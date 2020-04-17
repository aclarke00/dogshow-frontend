class User < ApplicationRecord
    has_many :dogs, dependent: :destroy
    validates :username, uniqueness: true
    has_secure_password

end
