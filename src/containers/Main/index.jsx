import React, {useState, useEffect, useRef} from 'react';
import {Row} from 'reactstrap';
import {DATA} from '../../api';
import {random} from '../../utils';
import Column from '../../components/Column';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const Main = () => {
  const [state, setState] = useState({
    first: [],
    second: [],
    third: [],
  });
  const columns = ['first', 'second', 'third'];
  const randomNumbersOfCards = useRef(random(3, 6));
  const addCard = (newCard, col) => {
    setState({
      ...state,
      [col]: [...state[col], newCard],
    });
  };

  const changeCard = (editCard, col, index) => {
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
    let first = data.splice(0, randomNumbersOfCards.current);
    let second = data.splice(0, Math.floor(data.length / 2));
    let third = data;
    setState({first, second, third});
  };

  useEffect(() => {
    console.log('main mount');
    getData();
  }, []);
  return (
      <Row>
        {columns.map((col, i) => (
          <Column
            key={col + i}
            data={state[col]}
            col={col}
            changeCard={changeCard}
            addCard={addCard}
            deleteCard={deleteCard}
          />
        ))}
      </Row>
  );
};
export default Main;
