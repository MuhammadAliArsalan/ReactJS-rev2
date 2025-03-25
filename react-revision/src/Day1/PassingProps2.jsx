import React from 'react'

const Avatar = ({itemName,size,picLink}) => {   //Avatar is the child because it depends on the data passed from the parent and is rendered by the parent.
  return (
    <div style={{margin:20}}>
        <img src={picLink}
        alt={itemName.name}
        width={size}
        height={size}
        />
    </div>
  )
}

export default Avatar
