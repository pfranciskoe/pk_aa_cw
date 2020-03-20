class ArtworkSharesController < ApplicationController
    def create
        art_share = ArtworkShare.new(artwork_share_params)
        if art_share.save
            render json: art_share
        else
            render art_share.errors.full_messages, status: :unprocessable_entity
        end
    end
    def destroy
        art_share = ArtworkShare.find(params[:id])
        art_share.destroy
        render json: art_share
    end

    private
        def artwork_share_params
            params.require(:artwork_share).permit(:artwork_id,:viewer_id)
        end
end
