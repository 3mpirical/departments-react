import React from "react";
import { Link } from "react-router-dom";
import { AddProductForm } from "./AddProductForm";
import axios from "axios";



class AddProductPage extends React.Component {
    state = { products: [] }

    componentDidMount() {
        axios.get(`/api/departments/${this.props.match.params.id}/products`)
        .then((res) => {
            this.setState({ products: res.data });
        })
        .catch((err) => console.log(err));
    }

    createProduct = (product) => {
        axios.post(`/api/departments/${this.props.match.params.id}/products`, product)
        .then((res) => {
            const products = [...this.state.products, res.data];
            this.setState({ products });
        })
        .catch((err) => console.log(err));
    }

    renderProducts = () => {
        return this.state.products.map((product) => {
            return (
                <div key={product.id} className="go-to-product">
                    <li>{product.name}</li> 
                    <Link to={`/products/${product.id}`} >
                        <i className="far fa-arrow-alt-circle-right"></i>
                    </Link>
                </div>
            )
        });
    }

    render() {
        return(
            <div className="add-product-page">
                <AddProductForm 
                    createProduct={this.createProduct} 
                    departmentId={this.props.match.params.id}
                />
            
                <div className="go-to-products-list">
                    { this.renderProducts() }
                </div>
            
            </div>
        )
    }
}



export { AddProductPage };