import React, { useEffect, useState } from "react";
import './List.css'
import ListItem from './ListItem';
import AddItem from './AddItem';

let items = [
    {
        title: 'Lavar a louça',
        complete: true
    },
    {
        title: 'Alimentar o gato',
        complete: false
    },
    {
        title: 'Levar o lixo p/ rua',
        complete: false
    }, 
    {
        title: 'Comprar comida',
        complete: true
    }
]





function List(){
    let [count, setCount] = useState([]);
    useEffect(() => {
        let number=0;
        for(let a=0;a<items.length;a++){
            if (items[a].complete===false){number++}
        }
        setCount(number);
    }, [])
    return (
        <div className='list'>
            <AddItem />

           {items.map((i) => (
               <ListItem title={i.title} complete={i.complete}/>
           ))}

            <div className='footer'>
        <p className='i-left'><span>{count}</span> items left</p>
        <div className='i-selection'>
          <a>All</a>
          <a>Active</a>
          <a>Completed</a>
        </div>
        
        <a className='cls-completed'>Clear Completed</a>
        
        </div>
        </div>
    )
}

export default List;