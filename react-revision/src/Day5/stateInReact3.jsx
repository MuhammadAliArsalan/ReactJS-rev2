import React from "react";
import { useState } from "react";
import { LeadersList } from "./leaderList";

const DisplayLeaders=()=>{
    const[index,setIndex]=useState(0);
    const[showMore,setShowMore]=useState(false);
    const hasNext = index <LeadersList.length-1;
    const hasPrev=index>0;

    const showLeaderClick=()=>{
        setShowMore(!showMore);
     
    }
    const nextLeaderClick=()=>{
        if(hasNext){
            setIndex(index+1);
        }
        else{
            setIndex(0);
        }
    }
    const prevLeaderClick=()=>{
        if(hasPrev){
            setIndex(index-1);
        }
        else{
            setIndex(LeadersList.length-1);
        }
    }
    const buttonStyle = {
        border: "2px solid black",
        padding: "5px 10px",
        margin: "0 5px",
        cursor: "pointer",
        backgroundColor: "#f0f8ff",
        borderRadius: "5px",
    };

    return(
        <div>
            <h3>Leader of the World</h3>
            <p>Click this to see the next leader <button style={buttonStyle} onClick={nextLeaderClick}>Next</button></p>
            <p>The name of leader is <b>{LeadersList[index].name}</b> who belongs to <i style={{fontWeight:"bold"}}>{LeadersList[index].country}</i></p>
            <h4>( {index+1} of {LeadersList.length})</h4>
            <p>Click to see previous leader <button style={buttonStyle} onClick={prevLeaderClick}>Previous</button></p>

            <p>Click to see More about leader<button  style={buttonStyle} onClick={showLeaderClick}>Show Details</button></p>
            <p>{showMore && <span>{LeadersList[index].name} role in hstory is {LeadersList[index].role}</span>}</p>

        </div>
        
    )
   
}

export default DisplayLeaders;