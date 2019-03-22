import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SortBar } from "./SortBar";



class AllProducts extends React.Component {
    state = { products: [] }

    componentDidMount() {
        axios.get(`/api/products/newest`)
        .then((res) => {
            this.setState({ products: res.data });;
        })
        .catch((err) => console.log(err));
    }

    getProductsByOrder = (order) => {
        axios.get(`/api/products/${order}`)
        .then((res) => {
            this.setState({ products: res.data });
        })
        .catch((err) => console.log(err));
    }

    renderProducts = () => {
        if(this.state.products.length <= 0) {
            return <h2>There doesn't seem to be any products to display...</h2>
        }
        return this.state.products.map((product) => {
            return (
                <div key={product.id} className="product">
                    <Link to={`/products/${product.id}`} >
                        <img src={product.picture} alt="" className="product__picture"/>
                    </Link>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="all-products-page-container">
                <SortBar getProductsByOrder={this.getProductsByOrder} />
                <header className="products-header" > <h1>Featured Products</h1> </header>
                <div className="products-container" >
                    { this.renderProducts() }
                </div>
            </div>
        )
    }
}



export { AllProducts };