import { useState, useEffect } from "react";
import axios from "axios";

const customeReactQuery = (baseURL) => {


    //A custom hook is just a reusable function in React that can call other hooks inside it (useState, useEffect, etc.).

    const [student, setStudent] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const debounceTimer = setTimeout(() => {   //  debounced API call: Wait 800ms after the user stops typing before making API request.
            (async () => {
                try { 
                    setLoading(true);
                    setError(false);

                    const finalURL = search? `${baseURL}?search=${search}`: baseURL;                      

                    const response = await axios.get(finalURL);
                    console.log(response.data);
                    setStudent(response.data);
                } catch (error) {
                    console.error(error);
                    setError(true);
                } finally {
                    setLoading(false);
                }
            })();
        }, 800);

        return () => clearTimeout(debounceTimer);
    }, [baseURL, search]);    // useEffect runs whenever either baseURL or search changes.

    return [student, error, loading, search, setSearch];
};

const Students = () => {

    const [student, error, loading, search, setSearch] = customeReactQuery('http://localhost:5000/api/students');

    // if(error){
    //     return <h2>SOmething went wrong</h2>
    // }
    // if(loading){
    //     return <h1>Loading.....</h1>
    // }
    return (
        <div>
            <h2>Students Data</h2>

            <input
                type="text"
                value={search}
                placeholder="Start typing"
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading && <h1>Loading...</h1>}
            {error && <h1>Something went wrong</h1>}

            <p>The total number of students is {student.length}</p>
        </div>
    );

}

export default Students;

