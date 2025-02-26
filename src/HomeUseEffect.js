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

    // useEffect hook doesn't return anything

    useEffect(() => {
        console.log('useEffect ran..');
        console.log(blogs);
    });
    // useEffect function runs everytime there is a re-render

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>
        </div>
    );
}
 
export default Home;