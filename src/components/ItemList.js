import React from "react";
import Item from "./Item";

const ItemList = props => {
  return(
    <div className='item-list'>
    
      {props.groceries.map(item => (
        <Item 
          key={item.id}
          item={item} 
          toggleItem={props.toggleItem}
         />
      ))}
      <button className='delete-btn' onClick={props.deletePurchased}>
      Delete Items
      </button>
   
    </div>
  );
}

export default ItemList;