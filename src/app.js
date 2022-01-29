import React,{useState} from 'react';
import Birthday from './birthday';
import './index.css';
import data from './data'
const App = () => {
    const [people, setPeople] = useState(data);
    const clearAll = () => [
        setPeople([])
        
    ]
    return (
    <main>
  <section className='container'>
                <h3>{people.length} Birthdays</h3>
                <Birthday people={people}/>
                <button className='btn' onClick={clearAll}>Clear All</button>
     
    </section>
    </main>)
};

export default App;
