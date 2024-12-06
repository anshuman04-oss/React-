// import e from "express";
import { useState } from 'react'

const HomeScribble1 = () => {
    let [name, setName] = useState("Anshuman");
    let [age, setAge] = useState(25);
    const handleClick = () => {
        setName("Henry")
        setAge(30)
    }
    // Here, Jive is enclosed within 
    // the scope of handleClick

    // To make the app reactive, or to 
    // propagate the change, we use states. So, the useState hook
    // invokes the whole app to change the name set and re render
    // the app.
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me { name }, { age } y/o</button>
        </div>
    );
}
 
export default Home;