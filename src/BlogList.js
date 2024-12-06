// import { useState  } from "react";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ( {data, title} ) => {

    // const BlogList = (props) -> This can also be done in order to import all the elements from
    // Home.

    return ( 
        
        <div className="blog-list">
            <h2> {title} </h2>
            {data.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;