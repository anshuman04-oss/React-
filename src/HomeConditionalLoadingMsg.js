// import e from "express";
import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [name, setName] = useState("Anshuman")
    const [isPending, setIsPending] = useState(true)

    // Often we render the BlogList once we have blog data. Until then, we don't render it.
    // So, we are to create a Loading message if something is taking time to get loaded.
    // Our fetch is very quick as we are making fetch to our own computer.
    // Most times, when we fetch from an end point of other device, it is slower. So, then
    // the user will see the Loading message while we fetch the data.
    // Therefore, we are using isPending state.

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        setTimeout(() => {
            // Timeout set to retain the loading message for a while
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                // Once we have the data, we can set isPending to false
                setIsPending(false)
            })
        }, 1000)
    }, []);

    return ( 
        <div className="home">
            {/* Loading msg before BlogList display */}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>}
            {/* <button onClick={() => setName("Louis")}>Change Name</button> */}
            {/* <h2>{ name }</h2> */}
        </div>
    );
}
 
export default Home;