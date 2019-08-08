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
    const data = [...DATA];
    data.sort(() => Math.random() - 0.5);
    const first = data.splice(0, randomNumbersOfCards.current);
    const second = data.splice(0, Math.floor(data.length / 2));
    const third = data;
    setState({first, second, third});
  };

  useEffect(() => {
    getData();
  }, []);
  return (
      <Row className = 'test__wrap'>
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
