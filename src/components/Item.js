import React from "react";


const Item = props => {
  return(
    <div className={`item${props.item.purchased ? ' purchased' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
    >
      
      <h1>{props.item.name}</h1>
         
    </div>
  );
}

export default Item;

