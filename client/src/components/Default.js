import React from "react";



const Default = ({ history }) => {
    return (
        <div className="departments-container">
            <h1>Sorry, but the page you are looking for does not exist</h1>
            <button onClick={() => history.goBack()} >Go Back?</button>
        </div>
    )
}



export { Default };