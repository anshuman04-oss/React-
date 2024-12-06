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

    // useEffect is a good place to fetch data as it runs the function when the compnent first runs 
    // initially..

    // Thus, generally, we want to go out to fetch some data to use in our application,
    // instead of the data data that we have right here, because typically in a web application,
    // we would not hard code data, instead it would come from a database using an api end point.

    // So, we will use a package called JSON server which is going to allow us to build 
    // a fake rest api just using a JSON file that we can use to test.

    // In a .json file, each top level property is considered a resource. Here, we have only one 
    // resource, "blogs".

    // So, it sees this as a resource and it creates end points fr us to interact with the resource
    // so that we can delete, edit, get items using the end point.

    // The next thing we need to do is to use the json server package to watch this file and wrap 
    // with some end points.
    
    // So, there are two options here. Either we can install the json server package locally
    // into this project and then use it or we can use npx like we did with create react app 
    // to run the code from the web and it will still watch our file right here.  

    // npx json-server --watch Data/db.json --port 8000
    // The command to watch the database.

    /*
        Endpoints

        /blogs              GET      Fetch all blogs
        /blogs/{ id }       GET      Fetch a single blog
        /blogs              POST     Add a new blog
        /blogs/{ id }       DELETE   Delete a blog

    */ 

    useEffect(() => {
        console.log('useEffect ran..');
        console.log(blogs);
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>
            <button onClick={() => setName("Louis")}>Change Name</button>
            <h2>{ name }</h2>
        </div>
    );
}
 
export default Home;