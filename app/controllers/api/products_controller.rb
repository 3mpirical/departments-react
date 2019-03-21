class Api::ProductsController < ApplicationController
    before_action :get_product, only: [:show, :update, :destroy]

    ### You'll probably want to get products
    ### from departments directly.
    def index
        render( json: Product.all() )
    end

    def index_by_department
        render( json: Department.find(params[:department_id]).products )
    end

    def show
        render( json: @product )
    end

    def create
        product = Product.new(product_params())

        if(product.save())
            render( json: product, status: 201 )
        else
            render( json: {error: product.errors, response_text: "Data Not Created"}, status: 422 )
        end
    end

    def update
        if(@product.update(product_params()))
            render( json: @product )
        else
            render( json: {error: @product.errors, response_text: "Data Not Updated"}, status: 422 )
        end
    end

    def destroy
        @product.destroy()
        render( json: "Data Deleted" )
    end

    private
        def get_product
            return @product = Product.find(params[:id])
        end

        def product_params
            return params.require(:product).permit(:name, :price, :description, :picture, :department_id)
        end
end
