// import e from "express";
import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data, isPending, error} = useFetch("http://localhost:8000/blogs")

    // const { data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")
    // The above could have also been done.
    // It means, catch the data, call it blogs.

    // We can observe, most of our logic part is there inside the useEffect hook.
    // So, we would like apply some methods to improve reusability of the code.
    // We can keep the useEffect hook in a different file and some other ways.
    // Here, we will create custom hooks to improve reusability of the code.

    return ( 
        <div className="home">
            { error && <div>{error} error has occured</div> }
            { isPending && <div>Loading...</div>}
            {data && <BlogList data={data} title="All Blogs" />}
        </div>
    );
}
 
export default Home;