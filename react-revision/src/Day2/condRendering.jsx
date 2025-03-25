import React from "react";

const Item = ({ isPacked, name,quantity }) => {
  if (isPacked) {
    return (
      <div>
        <p><span style={{fontWeight:"bold"}}>{quantity}</span> {name} has been put into hiking bag<span style={{color:'oklch(0.393 0.095 152.535))'}}> ✔</span></p>
      </div>
    );
  } else {
    return (
      <div>
        <p><span style={{fontWeight:"bold"}}>{quantity}</span> {name} has been put into bag<span style={{color:'oklch(0.444 0.177 26.899)'}}>❌</span></p>
      </div>
    );
  }
};

export default Item;
