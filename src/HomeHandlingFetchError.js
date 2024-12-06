// import e from "express";
import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    // Now, we would like to catch the error and display it in the browser
    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                // console.log(res)
                // There is a key in response called ok.
                // That is: ok: true

                // So, let's say we put 'http://localhost:8000/blogss' to fetch.
                // So, what basically we are doing is throwing our own error and catching with
                // .catch method.
                if(!res.ok) {
                    throw Error("Could not fetch data for that resource")
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
                // To erase the error message after the error is removed.
                setError(null)
            })
            .catch(err => {
                // Also, if we catch an error, we would like to set the isPending to false
                setIsPending(false)
                setError(err.message);
                // This will catch any kind of network error.
                // So, for example, if I am running from my device, and the api is not live,
                // then I will get the error.
            })
        }, 1000)
    }, []);

    return ( 
        <div className="home">
            { error && <div>{error} error has occured</div> }
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>}
        </div>
    );
}
 
export default Home;