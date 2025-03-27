import React from 'react'

const StudentReport = () => {

    const students = [
        { id: 1, name: "Ali", marks: 80 },
        { id: 2, name: "Sara", marks: 90 },
        { id: 3, name: "Ahmed", marks: 70 },
        { id: 4, name: "Khan", marks: 72}
    ]

    const goodStudent = students.filter((std) => std.marks >= 80)

    return (
        <div>
            <h2>Good Students (Marks ≥ 80)</h2>
            <ol>
                {goodStudent.map((std)=>
                <li style={{fontWeight:"bold"}} key={std.id}>
                    Name:{std.name} -Marks:{std.marks}
                </li>)}
            </ol>
        </div>

    )
}

export default StudentReport
