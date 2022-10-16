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
     <div>
       <Container>
         <nav>
           <NavLink to={`${process.env.PUBLIC_URL}/home`}>Home</NavLink>
           <NavLink to={`${process.env.PUBLIC_URL}/test`}>Test</NavLink>
         </nav>
       </Container>
       <Container>
         <Router basepath={process.env.PUBLIC_URL}>
           <Home path="home" />
           <TestCard path="test" />
         </Router>
         <Redirect from="/" to={`${process.env.PUBLIC_URL}/home`} noThrow />
       </Container>
     </div>
    </>
  );
}

export default App;
