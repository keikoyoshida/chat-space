# Database design


## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|text|null: false, add_index unique: true|

### Association
- has_many :groups, through: :members
- has_many :members



## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index unique: true|

### Association
- has_many :users, through: :members
- has_many :members
- accepts_nested_attributes_for :members



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
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


