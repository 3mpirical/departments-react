import React from "react";
import axios from "axios";
import { AddDepartmentForm } from "./AddDepartmentForm"
import { EditDepartmentForm } from "./EditDepartmentForm"



class Sidebar extends React.Component {
    state = { departments: [], editing: false }

    componentDidMount() {
        axios.get(`/api/departments`)
        .then((res) => {
            this.setState({ departments: res.data });
        })
        .catch((err) => console.log(err));
    }

    createDepartment = (department) => {
        axios.post(`/api/departments`, department)
        .then((res) => {
            console.log(res.data)
            const departments = [...this.state.departments, res.data];
            this.setState({ departments, editing: false });
        })
        .catch((err) => console.log(err));
    }

    deleteDepartment = (id) => {
        console.log(id);
        axios.delete(`/api/departments/${id}`)
        .then((res) => {
            console.log(res.data)
            const departments = this.state.departments.filter((department) => {
                if(department.id !== id) return department;
            });
            this.setState({ departments, editing: false });
        })
        .catch((err) => console.log(err));
    }

    updateDepartment = (department) => {
        axios.put(`/api/departments/${department.id}`, department)
        .then((res) => {
            console.log(res.data);
            const departments = this.state.departments.map((department) => {
                if(department.id === res.data.id) return res.data;
                return department; 
            });
            this.setState({ departments, editing: false });
        })
        .catch((err) => console.log(err));
    }

    setEditingTrue = (event) => {
        this.setState({ editing: true });
    }

    setEditingFalse = (event) => {
        this.setState({ editing: false });
    }

    renderDepartments = () => {
        return this.state.departments.map((department) => {
            return(
                <div key={department.id} className="department">
                    <a href={`/departments/${department.id}`} >{department.name}</a>
                </div>
            )
        })
    }

    renderEditDepartmentForms = () => {
        return this.state.departments.map((department) => {
            return (
                <EditDepartmentForm 
                    key={department.id}
                    department={department}
                    updateDepartment={this.updateDepartment}
                    deleteDepartment={this.deleteDepartment}
                />
            )
        })
    }

    render() {
        return (
            <nav className="sidebar">
                <h3 className="sidebar__header"> Departments </h3>
                <div className="sidebar__buttons">
                    <button className="sidebar__button" onClick={this.setEditingFalse} >View</button>
                    <button className="sidebar__button" onClick={this.setEditingTrue} >Edit</button>
                </div>

                { !this.state.editing
                    ?
                        this.renderDepartments()
                    :
                        <div className="department-form">
                            <AddDepartmentForm createDepartment={this.createDepartment} />
                            { this.renderEditDepartmentForms() }
                        </div>
                }

                
            </nav>
        )
    }
}



export { Sidebar };