import react from "react";
import axios from "axios";

export default async function Query(query, options, start, max) {
    /*
    * q=flowers&
    * startIndex=0&
    * maxResults=30&
    * key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk
    * */
    let option = () => options? `+${options?.option}:${options?.value}` : '';
    const parameters = {
        q: `intitle:${query}${option()}`,
        startIndex: (start) => start? start : null,
        max: (max) => max? max : null,
        key: process.env.REACT_APP_API_KEY
    }
    const request = await axios.get('https://www.googleapis.com/books/v1/volumes',{
        params: {
            q: parameters.q,
            startIndex: parameters.startIndex(start),
            maxResult: parameters.max(max),
            key: parameters.key
        }
    });

    return request;
}