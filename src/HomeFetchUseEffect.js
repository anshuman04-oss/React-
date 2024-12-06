// import e from "express";
import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    // Because of the above line, we get an error as in the BlogList component, we are trying to access
    // the id of the blogs. Initially, blogs is mapped to null. Thus the error.

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    const [name, setName] = useState("Anshuman")

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
            // Converts the data into a javascript object.
        })
        .then(data => {
            console.log(data);
            setBlogs(data)
        })
    }, []);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>}
            <button onClick={() => setName("Louis")}>Change Name</button>
            <h2>{ name }</h2>
        </div>
    );
}
 
export default Home;