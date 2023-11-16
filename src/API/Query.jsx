import react from "react";
import axios from "axios";

export default async function Query(query, option, start, max) {
    /*
    * q=flowers&
    * startIndex=0&
    * maxResults=30&
    * key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk
    * */
    console.log(process.env.REACT_APP_API_KEY);
    const request = await axios.get('https://www.googleapis.com/books/v1/volumes',{
        params: {
            q: "flowers",
            startIndex: "0",
            maxResult: "30",
            key: "AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk",
        }
    })

    return request
}