import React from 'react';
import {Col} from 'reactstrap';
import './index.scss';
import LexicalCard from './LexicalCard';
import EditModal from '../EditModal';

const Column = ({data, col, change, add, deleteCard}) => (
    <Col className="column">
      <EditModal change = {add} col={col}/>
      {data.map((elem, i) => (
        <LexicalCard
          index={i}
          key={i}
          title={elem.title}
          text={elem.text}
          translate={elem.translate}
          change={change}
          col={col}
          deleteCard={deleteCard}
        />
      ))}
    </Col>
  );

export default Column;
