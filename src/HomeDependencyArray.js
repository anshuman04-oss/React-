// import e from "express";
import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    const [name, setName] = useState("Anshuman")

    // Dependency array in react is used to run the useEffect hook in particular renders as
    // we would not want to run the hook in every render..
    useEffect(() => {
        console.log('useEffect ran..');
        console.log(blogs);
    }, [name]);
    // The empty dependency array says that the function would run only on the first render 
    // and stop running in upcoming renders.
    // In this case, the function runs, the state changes, but the useEffect hook becomes inactive.

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>
            <button onClick={() => setName("Louis")}>Change Name</button>
            <h2>{ name }</h2>
        </div>
    );
}
 
export default Home;