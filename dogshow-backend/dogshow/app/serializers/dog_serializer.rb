class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :size, :commands, :tricks, :image_url
end
