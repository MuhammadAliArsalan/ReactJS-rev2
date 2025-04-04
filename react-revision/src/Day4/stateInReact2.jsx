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
    const whenClicked2=()=>{
        setAge(a=>a+1);
    }

    return(
        <div>
            <p>Click this to increment age by 3 <button style={{marginTop:"20px",border:"2px sol"}} onClick={whenClicked}>Click me</button>+3</p>
            
            <p>Click this to increment age by 1 <button onClick={whenClicked2}>Click me</button>+1</p>
            <p>The student's name is <b>{name}</b></p>
            <p>The person's age is <em> {age} </em></p>
        </div>
    )
}

export default PersonInfo2