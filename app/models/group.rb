class Group < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :users, through: :group_users
  has_many :group_users
  has_many :messages
end
