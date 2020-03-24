class CatsController < ApplicationController
    def index
        @kats = Cat.all
        render :index
    end

    def show
        @kat = Cat.find(params[:id])
        render :show
    end

    def new
        @kat = Cat.new
        render :new
    end

    def create
        @kat = Cat.new(cat_params)
        if @kat.save
            redirect_to cat_url(@kat.id)
        else
            render :new
        end
    end

    def edit
        @kat = Cat.find(params[:id])
        render :edit
    end

    def update
        @kat = Cat.find(params[:id])
        if @kat.update(cat_params)
            redirect_to cat_url(@kat)
        else
            render :edit 
        end
    end

    private
    def cat_params
        params.require(:cat).permit(:name,:color,:sex,:birth_date,:description)
    end
end
