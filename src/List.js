import React from 'react';

const List =(props) => {



    const listitems=props.items.map(item => <li key={item.key}   >
        {item.text} <button onClick={() => props.deleteItem(item.key)}>Delete</button></li>);

    return(




  <ul>
    {
     listitems
    }
  </ul>
);
}
export default List;