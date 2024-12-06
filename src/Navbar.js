import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/" style = {{
                    // Bcz it is a javascript object
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                }}>Home</Link>
                <Link to="/create" style = {{
                    // Bcz it is a javascript object
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                }}>New Blog</Link>
                <Link to="/" style = {{
                    // Bcz it is a javascript object
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                }}>Blogs</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;