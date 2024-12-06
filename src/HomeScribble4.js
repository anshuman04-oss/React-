// import e from "express";
import { useState } from 'react'
import BlogList from './BlogList';

const HomeScribble3 = () => {
    const [blogs, useBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    console.log(typeof(blogs))
    return ( 
        <div className="home">

            {/* To display the blogs.. */}
            <BlogList blogs={blogs} title="All Blogs"/>

            {/* Now, let's say we have to display some selective blogs.
                In that case, we will only pass the selected set of blogs into the BlogList component. */}

            <BlogList blogs={blogs.filter((blog) => {blog.author === 'mario'})} title="Mario's blogs: "/>

        </div>
    );
}
 
export default Home;