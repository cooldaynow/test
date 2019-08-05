import React from 'react';
import {Container} from 'reactstrap';
import './index.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from '../Main';
import Navigation from '../../components/Navigation';
import Info from '../../components/Info';

const App = ({}) => {
  return (
    <Router>
      <Navigation />
      <Container className="app__wrap" fluid>
        <Route exact path="/" component={Main} />
        <Route path="/Info" component={Info} />
      </Container>
    </Router>
  );
};

export default App;
