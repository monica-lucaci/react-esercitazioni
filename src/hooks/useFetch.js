import { useEffect, useState } from "react";





export const useFetch = (url, options = { selector: null }) => {
    const [data,setData] = useState([]);
    const [error,setError] = useState(false);

    const refetch = async () => {
        setError(false)
        try {
            const response = await fetch(url);
            const result = await response.json();
            if(response.ok){
                setData(options.selector !== null ? result[options.selector] : result )
            } else {
                setError(result);
            }
            
        } catch (error) {
            setError(error.message);
        }
    } 

    useEffect(() => {
        refetch();
    },[url]);

    return {
        data,
        error,
        refetch,
    }
};
