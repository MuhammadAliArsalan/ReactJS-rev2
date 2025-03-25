import React from "react";

const CanVote=({name,address,age})=>{
   return(
    <h3 style={{fontWeight:"normal"}}>{age>=18 && age<=70? (
            <span>This person {name} living at {address} can vote</span>
    ):(
        <del>
            <span>This person {name} living at {address} can vote</span>
        </del>
    )}
    </h3>
   )
}

export default CanVote