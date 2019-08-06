import React from 'react';
import {Row, Col} from 'reactstrap';
import Task from '../Task';
import './index.scss';

const Info = () => {
  return (
    <Row className="info__wrap">
      <Col className="info__col">
        <h2>"Разговорная лексика" </h2>
        <Row className="info__body">
          <Task />
        </Row>
      </Col>
    </Row>
  );
};
export default Info;
