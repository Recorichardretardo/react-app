import React from 'react';
import { Container } from 'react-bootstrap';
import { Router, Redirect } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavLink from '../components/NavLink';
import Header from './Header';
import TestCard from './TestCard';
import Home from './Home';
import './style.scss';

function App() {
  return (<>
     <Header />
     <div className='row'>
     <div className='col-3'>
    
         <nav>
           <ul>
             <li>
             <NavLink to={`${process.env.PUBLIC_URL}/home`}>Home</NavLink>

             </li>
             <li>
             <NavLink to={`${process.env.PUBLIC_URL}/test`}>Test</NavLink>
             </li>
           </ul>
          
         </nav>
      
       </div>
       <div className='col-9'>
      
         <Router basepath={process.env.PUBLIC_URL}>
           <Home path="home" />
           <TestCard path="test" />
         </Router>
         <Redirect from="/" to={`${process.env.PUBLIC_URL}/home`} noThrow />
      
       </div>
      
      
     </div>
    </>
  );
}

export default App;
