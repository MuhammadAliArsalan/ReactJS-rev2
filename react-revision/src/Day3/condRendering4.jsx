import React from "react";

const StudentMarks = ({ name, rollNo, marks }) => {

    let grade=''

    if(marks>80 && marks<100){
        grade='A'
    }
    else if(marks>70 && marks<80){
        grade='B'
    }
    else if(marks>60 && marks<70){
        grade='C'
    }
    else{
        grade='D'
    }
    return (
        <div>
            <p> {name}: <em>RollNo: {rollNo} has achieved {marks} marks and his grade is {grade}</em></p>

        </div>
    );
}

export default function StudentList(){
    return (
        <div>
            <h2>Student's Grades</h2>
            <ol>
                <li><StudentMarks name="M.Ali" rollNo={32} marks={87} /></li>
                <li> <StudentMarks name="Mustafa" rollNo={39} marks={67} /></li>
                <li> <StudentMarks name="Bilal" rollNo={48} marks={45}/></li>
                <li> <StudentMarks name="Arham" rollNo={42} marks={78}/></li>
            </ol>
        </div>
    )
}