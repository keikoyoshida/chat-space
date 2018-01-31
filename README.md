# Database design


## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index unique: true|
|email|text|null: false, add_index unique: true|

### Association
- has_many :groups, through: :members
- has_many :members
- has_many :messages



## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index unique: true|

### Association
- has_many :users, through: :members
- has_many :members
- accepts_nested_attributes_for :members
- has_many :messages


## members table

|Column|Type|Options|
|------|----|-------|
|group_id|references|foreign_key: true|
|user_id|references|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## messages table

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|group_id|references|foreign_key: true|
|user_id|references|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


