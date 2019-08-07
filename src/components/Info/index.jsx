import React from 'react';
import {Row, Col} from 'reactstrap';
import Task from '../Task';
import Additionally from '../Additionally';
import './index.scss';

const Info = () => (
  <Row >
    <Col className="info__wrap">
      <h1 className = 'info__header'>"Разговорная лексика" </h1>
      <Row className="info__body">
        <Task />
        <Additionally />
      </Row>
    </Col>
  </Row>
);
export default Info;
