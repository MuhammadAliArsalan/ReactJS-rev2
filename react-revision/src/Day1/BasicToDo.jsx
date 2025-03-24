import React from "react";

const ToDoList=()=>{
    const tasks=[
        {
        "name":"Do Shopping",
        "todo":true
    },
    {
        "name":"Do study",
        "todo":false
    },
    {
        "name":"eat dinner",
        "todo":true

    }
]
  return(
    <div>
        <h2 style={{marginLeft:40}}>ToDo List</h2>
        <p style={{marginLeft:10}}>These are my <b>TO DOs</b></p>
        <ul style={{color:"green",fontFamily:"monospace",fontSize:15}}>
            <li>Task1: <span>{tasks[0]?.name +" : "+ tasks[0]?.todo}</span></li>
            <li>Task2: <span>{tasks[1]?.name+ ": "+ tasks[1]?.todo}</span></li>
            <li>Task3: <span>{tasks[2].name+" : "+tasks[1].todo}</span></li>
        </ul>
    </div>
  )
}

export default ToDoList;