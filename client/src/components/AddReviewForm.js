import React from "react";



class AddReviewForm extends React.Component {
    state = {
        rating: "",
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
            <div className="review-form-add-container" >
                <form className="review-form--add" onSubmit={this.handleSubmit} >

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

                    <textarea
                        required
                        type="text"
                        placeholder="Write Your Review" 
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    >
                    </textarea>
                    
                    <button type="submit" >Create</button>
                </form>
            </div>
        )
    }

}



export { AddReviewForm };