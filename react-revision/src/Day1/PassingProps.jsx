import React from 'react'

const Profile = ({name,rollNo,department="Software Engg"}) => {  //default value for department specifed
  return (
    <div style={{color:"steelblue",fontSize:15, fontWeight:'bold'}}>
        <li>Student's name is {name}. He belongs to {department} and his roll Number is {rollNo}</li>
    </div>
  )
}

export default Profile
