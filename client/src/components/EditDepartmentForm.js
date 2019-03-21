import React from "react";



class EditDepartmentForm extends React.Component {
    state = {
        name: this.props.department.name,
        id: this.props.department.id,
    }

    deleting = false;

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.deleting)
        if(this.deleting) return null;
        this.props.updateDepartment(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className="department-form--edit" onSubmit={this.handleSubmit} >
                <input 
                    required
                    placeholder="Department Name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <br/>
                <div className="department-button-container">
                    <button type="submit" >update</button>
                    <button className="red" onClick={() => {
                        this.deleting = true;
                        this.props.deleteDepartment(this.props.department.id)
                    }} >delete</button>
                </div>
            </form>
        )
    }
}



export { EditDepartmentForm };