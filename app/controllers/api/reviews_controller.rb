class Api::ReviewsController < ApplicationController
    before_action :get_review, only: [ :update, :destroy]

    def index
        render( json: Product.find(params[:product_id]).reviews )
    end

    def create
        review = Review.new(review_params())

        if(review.save())
            render( json: review, status: 201 )
        else
            render( json: {error: review.errors, response_text: "Data Not Created"}, status: 422 )
        end
    end

    def update
        if(@review.update(review_params()))
            render( json: @review )
        else
            rener( json: {error: review.errors, response_text: "Data Not Updated"}, status: 422 )
        end
    end

    def destroy
        @review.destroy()
        render( json: "Data Deleted" ) 
    end

    private
        def get_review
            return @review = Review.find(params[:id])
        end

        def review_params
            return params.require(:review).permit(:rating, :text)
        end
end
