class Api::V1::ArticleController < ApplicationController
  
  def show
    begin
      render json: Article.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { error: "Article not found"}, status: :not_found
    end
  end

  def index
    render json: Article.all
  end

  def create
  end

  def update
  end
end
