// import e from "express";
import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // In a typical multipage website, we type an url, hit enter and that sends a request to the 
    // server for our requirement. The server then returns an html page which we are then going
    // view in the browser.

    // So, we are constantly making requests to the server for new pages. Now, react applications
    // delegate all the routing and changing the page content to the browser only. 
    
    // Initially, the html page that we get back is virtually empty. Then react injects the 
    // content dynamically using the components that we create. If we then decide to click on 
    // a new page, the react router is going to step in and intercept the request to stop it
    // from going to the server and instead it's gonna look to the new page requests and inject the 
    // required content on the screen.

    // React router package is not a part of core react library.

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