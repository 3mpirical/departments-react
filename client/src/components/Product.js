import React from "react";
import axios from "axios";
import { EditProductForm } from "./EditProductForm";



class Product extends React.Component {
    state = { product: {}, reviews: [], editing: false }

    componentDidMount() {
        axios.get(`/api/products/${this.props.match.params.id}`)
        .then((res) => {
            this.setState({ product: res.data });
            return axios.get(`/api/products/${res.data.id}/reviews`);
        })
        .then((res) => {
            this.setState({ reviews: res.data });
        })
        .catch((err) => console.log(err));
    }

    updateProduct = (product) => {
        axios.put(`/api/departments/${product.department_id}/products/${product.id}`, product)
        .then((res) => {
            this.setState({ product: res.data, editing: false });
        })
        .catch((err) => console.log(err));
    }

    deleteProduct = (id) => {
        axios.delete(`/api/departments/${this.props.match.params.id}/products/${id}`)
        .then((res) => {
            this.props.history.push(`/departments/${this.state.product.department_id}`);
        })
        .catch((err) => console.log(err));
    }

    toggleEditing = () => {
        this.setState({ editing: !this.state.editing });
    }

    renderReviews = () => {
        return this.state.reviews.map((review) => {
            return(
                <div key={review.id} className="review">
                    <div className="review__rating">Rating: {review.rating}/5 </div>
                    <p className="review__text"> {review.text} </p>
                </div>
            )
        })
    }

    render() {
        const { product } = this.state;
        return (
            <div className="product-show-container">
                    { !this.state.editing
                        ?
                            <div className="product-show">
                                <img src={product.picture} alt="" className="product-show__picture"/>
                                <div className="text-container">
                                    <h1>{product.name} ${product.price}</h1>
                                    <p>{product.description}</p>
                                    <div className="buttons">
                                        <button onClick={() => this.props.history.goBack()} >Go Back</button>
                                        <button onClick={() => this.toggleEditing()} >Edit</button>
                                    </div>
                                </div>
                            </div>
                        :
                            <EditProductForm 
                                updateProduct={this.updateProduct} 
                                deleteProduct={this.deleteProduct}
                                product={this.state.product} 
                            />
                    }
                <div className="reviews">
                    <h2>Reviews</h2>
                    { this.renderReviews() }
                </div>
            </div>
        )
    }
}



export { Product };