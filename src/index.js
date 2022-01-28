import React from 'react';
import ReactDOM from 'react-dom';
import Birthday from './birthday';
import './index.css';



ReactDOM.render(
  <React.Fragment>
    <section className='container'>
      <h4 >5 Birthdays today</h4>
      <Birthday/>
     
    </section>
 </React.Fragment>,
  document.getElementById('root')
);

