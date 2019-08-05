import React from 'react';
import {Col} from 'reactstrap';
import {sortByField} from '../../utils';
import LexicalCard from '../../containers/LexicalCard';
import EditModal from '../../containers/EditModal';
import './index.scss';

const Column = ({data, col, changeCard, addCard, deleteCard}) => (
  <Col sm={12} md={4} lg={4} className="column">
    <EditModal change={addCard} col={col} />
    {data.sort(sortByField('text')).map((elem, i) => (
      <LexicalCard
        index={i}
        key={i}
        content={data[i]}
        changeCard={changeCard}
        col={col}
        deleteCard={deleteCard}
      />
    ))}
  </Col>
);
export default Column;
