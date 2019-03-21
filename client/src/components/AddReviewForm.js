import React from "react";



class AddReviewForm extends React.Component {
    state = {
        rating: 1,
        text: "",
        product_id: this.props.productId,
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createReview(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return (
            <div className="review-form__container" >
                <form className="review-form" onSubmit={this.handleSubmit} >
                    <div className="review-form-top">
                        <label>Rating
                                <select 
                                    required
                                    name="rating"
                                    value={this.state.rating}
                                    onChange={this.handleChange}
                                >   
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </label>

                            <span className="new-review">New Review</span>

                            <button type="submit" className="btn-green" >Create</button>                
                    </div>


                    <textarea
                        required
                        type="text"
                        placeholder="Write Your Review" 
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    >
                    </textarea>
                    
                </form>
            </div>
        )
    }

}



export { AddReviewForm };