import React from "react";



class EditReviewForm extends React.Component {
    state = { ...this.props.review }

    deleting = false;

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.deleting) return null;
        this.props.updateReview(this.state);
        this.props.toggleEditing();
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

                        <div className="review-form-buttons">
                            <button type="submit" className="btn-green review-update-btn" >Update</button>
                            <button
                                className="btn-red" 
                                onClick={() => {
                                    this.props.deleteReview(this.state.id);
                                    this.deleting = true;
                                }
                            }>Delete</button>
                        </div>
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



export { EditReviewForm };