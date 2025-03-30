import React from "react";

import { useState } from "react";

const PersonInfo=()=>{
    const [name,setName]=useState("");
    const [age,setAge] =useState(0);

    const  handleClick=()=>{
        setName("John Doe");
        setAge(42);
    }

    return(
        <div style={{marginTop:"50px"}}>
            <h2>Chap2 (States in React)</h2>
            <p>Plz click me <button style={{border:"2px solid black"}} onClick={handleClick}>Click me</button></p>
            <p>The name of person is {name}</p>
            <p>The age of person is {age}</p>
        </div>
    )
}

export default PersonInfo