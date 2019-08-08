import React from 'react';
import {Row, Col} from 'reactstrap';
import Task from '../Task';
import Additionally from '../Additionally';
import './index.scss';

const Info = () => (
  <Row >
    <Col className="info__wrap">
      <Row className="info__body">
        <Task />
        <Additionally />
      </Row>
    </Col>
  </Row>
);
export default Info;
