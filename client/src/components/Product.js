import React from "react";
import axios from "axios";
import { EditProductForm } from "./EditProductForm";
import { AddReviewForm } from "./AddReviewForm";
import { Review } from "./Review";



class Product extends React.Component {
    state = { product: {}, reviews: [], editing: false, displayAddReviewForm: false }

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

    createReview = (review) => {
        axios.post(`/api/products/${this.state.product.id}/reviews`, review)
        .then((res) => {
            const reviews = [...this.state.reviews, res.data];
            this.setState({ reviews });
        })
        .catch((err) => console.log(err));
    }

    updateReview = (review) => {
        axios.put(`/api/products/${this.state.product.id}/reviews/${review.id}`, review)
        .then((res) => {
            const reviews = this.state.reviews.map((review) => {
                if(review.id === res.data.id) return res.data;
                return review; 
            });
            this.setState({ reviews });
        })
        .catch((err) => console.log(err));
    }

    deleteReview = (id) => {
        axios.delete(`/api/products/${this.state.product.id}/reviews/${id}`)
        .then((res) => {
            const reviews = this.state.reviews.filter((review) => {
                if(review.id !== id) return review;
            });
            this.setState({ reviews });
        })
        .catch((err) => console.log(err));
    }

    toggleEditing = () => {
        this.setState({ editing: !this.state.editing });
    }

    toggleAddReviewForm = () => {
        this.setState({ displayAddReviewForm: !this.state.displayAddReviewForm });
    }

    renderReviews = () => {
        return this.state.reviews.map((review) => {
            return(
                <Review 
                    key={review.id} 
                    review={review}
                    updateReview={this.updateReview}
                    deleteReview={this.deleteReview}
                />
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
                    <h2>Reviews 
                        <button onClick={() => this.toggleAddReviewForm()} > 
                            { this.state.displayAddReviewForm? "Hide Form" : "Add Review" } 
                        </button> 
                    </h2>

                    { this.state.displayAddReviewForm && 
                        <AddReviewForm 
                            createReview={this.createReview} 
                            productId={this.state.product.id}
                        /> 
                    }

                    { this.renderReviews() }
                </div>
            </div>
        )
    }
}



export { Product };