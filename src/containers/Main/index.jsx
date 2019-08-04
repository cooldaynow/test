import React, {useState, useEffect, useRef} from 'react';
import {Row, Container} from 'reactstrap';
import {DATA} from '../../api';
import {random} from '../../utils';
import Column from '../../components/Column';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const Main = () => {
  const columns = ['colOne', 'colTwo', 'colThree'];
  const [state, setState] = useState({
    colOne: [],
    colTwo: [],
    colThree: [],
  });
  const randomNumbersOfCards = useRef(random(3, 6));
  const add = (newCard, col) => {
    setState({
      ...state,
      [col]: [...state[col], newCard],
    });
  };

  const change = (editCard, col, index) => {
    let newState = {...state};
    newState[col][index] = editCard;
    setState({
      ...newState,
    });
  };
  const deleteCard = (col, index) => {
    let newState = {...state};
    newState[col].splice(index, 1);
    setState({
      ...newState,
    });
  };
  const getData = () => {
    let data = [...DATA];
    data.sort((a, b) => Math.random() - 0.5);
    let colOne = data.splice(0, randomNumbersOfCards.current);
    let colTwo = data.splice(0, Math.floor(data.length / 2));
    let colThree = data;
    setState({colOne, colTwo, colThree});
  };
  useEffect(() => {
    console.log('main mount');
    getData();
  }, []);
  return (
    <Container className="wrap__main">
      <Row>
        {columns.map((col, i) => (
          <Column
            key={col + i}
            data={state[col]}
            col={col}
            change={change}
            add={add}
            deleteCard={deleteCard}
          />
        ))}
      </Row>
    </Container>
  );
};
export default Main;
