import  { useState } from 'react';
import './index.css'
import data from './data';

const Birthday = ({people}) => {
    
   
    return <>
        {people.map((person) => {
            
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
      
    </>
   
   
    
   
};

export default Birthday;
