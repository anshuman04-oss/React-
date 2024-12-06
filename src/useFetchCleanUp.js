import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal })   // Avoiding hard-coding
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not fetch data for that resource")
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                // Here, again we want to abort, but still catching the error.
                if(err.name === 'AbortError') {
                    console.log("fetch aborted")
                }
                setIsPending(false)
                setError(err.message);
            })
        }, 10);
        return () => abortCont.abort(); 
        // So, this was to get the idea of when we are getting an error bcz of background effect.
        // So, now, to avoid this, we will use an Abort controller.
    }, [url]);

    return { data, isPending, error }
}

export default useFetch