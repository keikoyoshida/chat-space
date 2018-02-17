class MessagesController < ApplicationController
  before_action :set_group

  def index
    @messages = Message.where(group_id: params[:id])
    @message = Message.new
  end

  def create
  end

  private

  def set_group
    @group = Group.find(params[:group_id])
  end
end
