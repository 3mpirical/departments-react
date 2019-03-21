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
                <Link to={`/products/${product.id}`} key={product.id} className="go-to-product__link" >
                    <div className="go-to-product">
                        <li>{product.name}</li> 
                        <i className="far fa-arrow-alt-circle-right"></i>
                    </div>
                </Link>
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
            
                <div className="go-to-products-list-container">
                    <div className="go-to-products-list">
                        <h2 className="go-to-product__heading" >Go To Products</h2>
                        { this.renderProducts() }
                    </div>
                </div>
            
            </div>
        )
    }
}



export { AddProductPage };