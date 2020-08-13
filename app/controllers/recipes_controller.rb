class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_food]

  # GET /recipes
  def index
    @user = User.find(params[:user_id])
    @recipes = Recipe.where(user_id: params[:user_id])

    render json: @recipes
  end

  # GET /recipes/1
  def show
    @user = User.find(params[:user_id])
    @recipe = Recipe.where(user_id: params[:user_id])

    render json: @recipe, include: :foods
  end

  # POST /recipes
  def create
    @user = User.find(params[:user_id])
    @recipe = Recipe.where(user_id: @user.id).new(recipe_params)

    if @recipe.save
      render json: @recipe, status: :created
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  def add_food
    @recipe = Recipe.find(params[:id])
    @food = Food.find(params[:food_id])

    @recipe.foods << @food

    render json: @recipe, include: :foods
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def recipe_params
      params.require(:recipe).permit(:name, :ingredients, :user_id)
    end
end
