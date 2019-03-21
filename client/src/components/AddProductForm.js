import React from "react";



class AddProductForm extends React.Component {
    state = {
        name: "",
        description: "",
        price: 0,
        picture: "http://loremflickr.com/250/300/product",
        department_id: this.props.departmentId,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.price = parseFloat(this.state.price);
        this.props.createProduct(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="product-form--add-container">
                <h1>Add New Product</h1>
                <form className="product-form--add" onSubmit={this.handleSubmit} >
                    <input 
                        required
                        type="text"
                        placeholder="product name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        required
                        type="text"
                        placeholder="product description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <input 
                        required
                        type="number"
                        placeholder="product price"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                    />
                    <input 
                        required
                        type="url"
                        placeholder="image url"
                        name="picture"
                        value={this.state.picture}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>

        )
    }
}



export { AddProductForm };