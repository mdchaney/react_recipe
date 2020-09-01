class Recipe < ApplicationRecord
  validates :name, presence: true, length: {maximum: 100}
  validates :ingredients, presence: true
  validates :instructions, presence: true
  validates :image_url, length: {maximum: 200}
end
