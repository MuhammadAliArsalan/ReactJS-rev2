import React from "react";

const StudentMarks = ({ name, rollNo, marks }) => {

    return (
        <div>
            <h3>
                {marks > 80 && marks < 100 ? (
                    <p>Student {name} whose rollNo is {rollNo} has achieved A grade</p>

                ) : (
                    <del>Student {name} whose rollNo is {rollNo} has achieved A grade</del>

                )}
            </h3>

            <h3>{marks < 80 && marks > 60 ? (
                <p>Student {name} whose rollNo is {rollNo} has achieved B grade</p>

            ) : (
                <del>Student {name} whose rollNo is {rollNo} has achieved B grade</del>

            )}</h3>

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
            </ol>
        </div>
    )
}