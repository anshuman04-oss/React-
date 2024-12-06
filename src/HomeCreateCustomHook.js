// import e from "express";
import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not fetch data for that resource")
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message);
            })
        }, 1000)
    }, []);

    // We can observe, most of our logic part is there inside the useEffect hook.
    // So, we would like apply some methods to improve reusability of the code.
    // We can keep the useEffect hook in a different file and some other ways.
    // Here, we will create custom hooks to improve reusability of the code.

    return ( 
        <div className="home">
            { error && <div>{error} error has occured</div> }
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>}
        </div>
    );
}
 
export default Home;