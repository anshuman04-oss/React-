import React from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

// To display the content of the blog..
const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
    // Taking advantage of reusability of useEffect hook.....
    const history  = useHistory();

    const handleClick = () => {
       // This is the end point from where blogs are to be deleted.
       fetch('http://localhost:8000/blogs/'+blog.id, {
        method: 'DELETE'
       }).then(() => {
        history.push('/')
       })
    }

    return ( 
        <div className="blog-details">
            {/* Loading message if this is true */}
            { isPending && <div>Loading...</div> }
            { error && <div>Error: {error}, { id }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default BlogDetails;