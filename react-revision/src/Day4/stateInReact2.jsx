import { useState } from "react";

import React from "react";

const PersonInfo2=()=>{

    const names=["Ali","Khan","John Doe"];

    const [name,setName]=useState("______");
    const [age,setAge]=useState(0);
    
    const randomIndex=Math.floor(Math.random()*names.length);

    const whenClicked=()=>{
        setName(names[randomIndex]);
        setAge(a=>a+3);
    }

    return(
        <div>
            <p>Click button to see magic <button style={{marginTop:"20px"}} onClick={whenClicked}>Click me</button></p>
            <p>The student's name is <b>{name}</b></p>
            <p>The person's age is <em> {age} </em></p>
        </div>
    )
}

export default PersonInfo2