import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page can not be found</p>
            <Link to="/">Would you like to go back to the Home Page??</Link>
        </div>
    );
}
 
export default NotFound;