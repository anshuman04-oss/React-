// import e from "express";

const HomeScribble = () => {
    const handleClick = (e) => {
        console.log('Click me ',e);
        // Here, giving with + makes it a string and concatenates.
    }
    const handleClickAgain = (name, e) => {
        console.log('Click me ' + name, e);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            {/* Here, we are not writing handleClick(), because if we 
            do that the function will be called automatically. without even
            listening onClick. */}
            <button onClick={(e) => {
                handleClickAgain("Anshuman", e)
            }}>Click me again</button>
            {/* Here we can't do 
                onClick={handleClickAgain(name)}, because
                the parentheses would again invoke the function. So,
                we will call that function wrapping it inside another 
                function. */}
        </div>
    );
}
 
export default Home;