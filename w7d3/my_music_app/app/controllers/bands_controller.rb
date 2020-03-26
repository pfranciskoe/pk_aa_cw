class BandsController < ApplicationController
    def index
        @bands = Band.all
        render :index
    end
    def new
        @band = Band.new
        render :new
    end
    def create
        @band = Band.new(band_params)
        if @band.save
            redirect_to bands_url
        else
            flash.now[:errors] = @band.errors.full_messages
            render :new
        end
    end
    
    def edit
        @band = Band.find_by(id:params[:id])
        render :edit
    end

    def update
        @band = Band.find_by(id:params[:id])
        @band.update(band_params)
        if @band.save
            redirect_to bands_url
        else
            flash.now[:errors] = @band.errors.full_messages
            render :edit
        end
    end

    def destroy
        @band = Band.find_by(id:params[:id])
        @band.destroy
        render :index
    end

    private
    def band_params
        params.require(:band).permit(:name)
    end

end
