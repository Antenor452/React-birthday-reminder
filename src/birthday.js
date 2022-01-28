import  { useState } from 'react';
import './index.css'
import data from './data';

const Birthday = () => {
    const [dates, setdate] = useState(data);
    const clearAll = () => {
        setdate([]);
        
    }
    return <>
        {dates.map((person) => {
            
           return <article key={person.id} className='person'>
                <img src={person.image} alt='' />
                <div>
                    <h4>{person.name}</h4>
                    <p>
                        {person.age} years
                    </p>
                </div>
            </article>
        })}
        <button className='btn' onClick={clearAll}>Clear All</button>
      
    </>
   
   
    
   
};

export default Birthday;
