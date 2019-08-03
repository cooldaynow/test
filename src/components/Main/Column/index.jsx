import React from 'react';
import {Col} from 'reactstrap';
import './index.scss';
import LexicalCard from './LexicalCard';

const Column = ({data, col, change}) => {
  return (
    <Col className="column">
      <button> testetesrers</button>
      {data.map((elem, i) => (
        <LexicalCard
          index={i}
          key={i}
          title={elem.title}
          text={elem.text}
          translate={elem.translate}
          change={change}
          col={col}
        />
      ))}
    </Col>
  );
};

export default Column;
