import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
const useGetRequest = (url) => {
   
    const context = useContext(AppContext);
    const {data, setData} = context;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortController = new AbortController();

        axios.get(url)
        .then(res => {
            
            if(res.status !== 200){
                throw Error("Could not fetch data from resource!");
            }
            
            setData(res.data);
            setError(null);
            setLoading(false);
            //console.log(res.data);
           
        })
        .catch(error => {
            if(error.name !== 'AbortError'){
                setError(error.message);
                setLoading(false);
            }
        });
        
        
        return () => abortController.abort();

    },[url]);

    
    return {loading, error}
}
 
export default useGetRequest;