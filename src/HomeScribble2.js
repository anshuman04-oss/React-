// import e from "express";
import { useState } from 'react'

const HomeScribble2 = () => {
    const [blogs, useBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    console.log(typeof(blogs))
    return ( 
        <div className="home">
            {/* Here, we can hardcode using 3 divs, but in 
            future, there might be 10 blogs. Rather, we 
            will find a way out to cycle through the array. */}
            {/* For the above purpose, we need map method */}

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    {/* Using the key here gives us certainty
                    that when more blogs are added, react keeps 
                    track of all of them and updates the key
                     */}
                     <h2>{ blog.title }</h2>
                     <p>Written by { blog.author}</p>
                </div>
            ))}

        </div>
    );
}
 
export default Home;