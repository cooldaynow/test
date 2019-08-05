import React from 'react';
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from '../Main';
import Navigation from '../../components/Navigation';
import Info from '../../components/Info';
import './index.scss';

const App = () =>( 
    <Router>
      <Navigation />
      <Container className="app__wrap" fluid>
        <Route exact path="/" component={Main} />
        <Route path="/Info" component={Info} />
      </Container>
    </Router>
  );

export default App;
