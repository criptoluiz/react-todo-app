import React, { useEffect, useState } from "react";
import './List.css'
import ListItem from './ListItem';
import AddItem from './AddItem';

const items = [
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
    const [count, setCount] = useState([]);
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
          All
          Active 
          Completed
        </div>
        
        <button className='cls-completed'>Clear Completed</button>
        
        </div>
        </div>
    )
}

export default List;