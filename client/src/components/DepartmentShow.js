import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";



class DepartmentShow extends React.Component {
    state = { department: null, products: [] }

    componentDidMount() {
        axios.get(`/api/departments/${this.props.match.params.id}`)
        .then((res) => {
            this.setState({ department: res.data });
            return axios.get(`/api/departments/${res.data.id}/products`)
        })
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
            <div>
                <header className="products-header" > 

                {this.state.department && 
                    <div className="header-content">
                        <h1> {this.state.department.name} 
                        </h1> 
                        <Link className="link-to-new-product" to={`/departments/${this.state.department.id}/products/new`} >
                            Add New Products
                        </Link>
                    </div>
                }
                </header>
                <div className="products-container" >
                    { this.renderProducts() }
                </div>
            </div>
        )
    }
}



export { DepartmentShow };