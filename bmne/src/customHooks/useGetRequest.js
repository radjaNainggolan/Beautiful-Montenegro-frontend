import axios from "axios";
import { useState, useEffect } from "react";

const useGetRequest = (url) => {
   
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        axios.get(url,{signal:abortController.signal})
        .then(respones => {
            if(respones.status !== 200){
                throw Error("Could not fetch data from resource!");
            }
            setData(respones.data);
            console.log(data);
            setLoading(false);
            setError(null);
        })
        .catch(error => {
            if(error.name !== 'AbortError'){
                setError(error.message);
                setLoading(false);
            }
        });
        
        
        return () => abortController.abort();

    },[url]);

    return {data, loading, error}
}
 
export default useGetRequest;