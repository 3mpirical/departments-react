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
                    
                    <button type="submit" >Update</button>
                    <button 
                        onClick={() => {
                            this.props.deleteReview(this.state.id);
                            this.deleting = true;
                        }}>Delete</button>
                </form>
            </div>
        )
    }

}



export { EditReviewForm };