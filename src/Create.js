import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// For redirecting (Programmatic redirect..)

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title, 
            body,
            author
        };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog)
            // This will make a post request to the given end point on server 8000.
        }).then(() => {
            console.log("New blog added")
            setIsPending(false)
            // history.go(-1);  Going back by one step.
            history.push('/');
        })
    }

    // Finally, to submit the form and add it to the database, we can form an universal hook
    // However, a hook would be an overkill for this as it would be submitted only once.

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="santa">Santa</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog....</button>}
                <p><strong>{ title }</strong></p>
                <p>{ body }</p>
                <p>{author}</p>
            </form>
        </div>
    );
}
 
export default Create;