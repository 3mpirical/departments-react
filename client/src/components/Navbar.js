import React from "react";
import { Link } from "react-router-dom";



class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar__left">
                    <h3>Commercify</h3>
                </div>

                <div className="navbar__right">
                    <Link to="/" >
                        Featured
                    </Link>
                </div>
            </nav>
        )
    }
}



export { Navbar };