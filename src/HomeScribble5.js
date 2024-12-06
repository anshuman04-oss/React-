// import e from "express";
import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, useBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    // Here, we will create a function for handleDelete and pass the function into the 
    // BlogList component.

    const handleDelete = () => {

    }

    return ( 
        <div className="home">

            <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>

        </div>
    );
}
 
export default Home;