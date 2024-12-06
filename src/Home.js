// import e from "express";
import React from "react";
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data, isPending, error} = useFetch("http://localhost:8000/blogs")
    return ( 
        <div className="home">
            { error && <div>{error} error has occured</div> }
            { isPending && <div>Loading...</div>}
            {data && <BlogList data={data} title="All Blogs" />}
        </div>
    );
}
 
export default Home;