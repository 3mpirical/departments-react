import React from "react";



class SortBar extends React.Component {
    state = { order: "newest" }

    handleClick = (event) => {
        this.setState({ order: event.target.value });
        this.props.getProductsByOrder(event.target.value);
    }


    render() {
        return (
            <div className="sortbar">
                <div className="sortbar__sortby" >Sort By:</div>
                <button 
                    className="btn-blue" 
                    value="newest"
                    onClick={this.handleClick}
                    style={this.state.order === "newest"? styles.selected : null} 
                >Newest</button>

                <button 
                    className="btn-blue" 
                    value="oldest"
                    onClick={this.handleClick}
                    style={this.state.order === "oldest"? styles.selected : null}
                >Oldest</button>

                <button 
                    className="btn-blue"
                    value="price_low"
                    onClick={this.handleClick}
                    style={this.state.order === "price_low"? styles.selected : null}
                > Lowest Price</button>

                <button 
                    className="btn-blue" 
                    value="price_high"
                    onClick={this.handleClick}
                    style={this.state.order === "price_high"? styles.selected : null}
                >Highest Price</button>

                <button 
                    className="btn-blue" 
                    value="alphabetical"
                    onClick={this.handleClick}
                    style={this.state.order === "alphabetical"? styles.selected : null}
                >Alphabetical</button>
            </div>

        )
    }
    
}

const styles = {
    selected: {
        color: "#f5f6fa",
        borderColor: "#f5f6fa",
        backgroundColor: "#48dbfb",
    }
}



export { SortBar };