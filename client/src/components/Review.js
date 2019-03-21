import React from "react";
import { EditReviewForm } from "./EditReviewForm";



class Review extends React.Component {
    state = { editing: false , mouseOver: false}

    toggleEditing = () => {
        this.setState({ editing: !this.state.editing });
    }

    mouseOverTrue = () => {
        this.setState({ mouseOver: true });
    }

    mouseOverFalse = () => {
        this.setState({ mouseOver: false });
    }

    render() {
        const { review } = this.props;
        if(!this.state.editing) {
            return (
                <div 
                    className="review"
                    onMouseEnter={() => this.mouseOverTrue()}
                    onMouseLeave={() => this.mouseOverFalse()}
                >
                    <div className="review__rating">
                        Rating: {review.rating}/5 
                        { this.state.mouseOver && 
                            <button 
                                className="btn-green"
                                onClick={this.toggleEditing} 
                            >Edit</button> 
                        }
                    </div>
                    <p className="review__text"> {review.text} </p>
                </div>
            )
        } else {
            return (
                <EditReviewForm 
                    review={review}
                    updateReview={this.props.updateReview} 
                    deleteReview={this.props.deleteReview} 
                    toggleEditing={this.toggleEditing}
                />
            )
        }

    }
}



export { Review };