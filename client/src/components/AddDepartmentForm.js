import React from "react";



class AddDepartmentForm extends React.Component {
    state = {
        name: "",
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createDepartment(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className="department-form--new" onSubmit={this.handleSubmit} >
                <input 
                    required
                    placeholder="New Department"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <button><i className="far fa-arrow-alt-circle-right"></i></button>
            </form>
        )
    }
}



export { AddDepartmentForm };