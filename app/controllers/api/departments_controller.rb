class Api::DepartmentsController < ApplicationController
    before_action :get_department, only: [:show, :update, :destroy]

    def index
        render( json: Department.all() )
    end

    def show
        render( json: @department )
    end

    def create
        department = Department.new(department_params())

        if(department.save())
            render( json: department, status: 201 )
        else
            render( json: {error: department.errors, response_text: "Data Not Created"}, status: 422 )
        end
    end

    def update
        if(@department.update(department_params()))
            render( json: @department )
        else
            render( json: {errors: @department.errors, response_text: "Data Not Update"}, status: 422 )
        end
    end

    def destroy
        @department.destroy()
        render( json: {response_text: "Data Deleted"} )
    end

    private
        def get_department
            return @department = Department.find(params[:id])
        end

        def department_params
            return params.require(:department).permit(:name)
        end
end
