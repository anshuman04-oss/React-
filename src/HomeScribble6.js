// import e from "express";
import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    // Here, we did not make the function in the BlogList component, rather made it in the 
    // Home component and passed it into the BlogList as component.
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">

            <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>

        </div>
    );
}
 
export default Home;