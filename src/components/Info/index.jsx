import React from 'react';
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap';
import './index.scss';
import ListItem from '../ListItem';
import data from '../../api/text.js';

const Info = () => {
  return (
    <Row className="info__wrap">
      <Col className="info__col">
        <h2>Тестовое задание "Разговорная лексика" </h2>
        <Row className="info__body">
          <Col className="description">
            {data.description.map(elem => <div>
            <ul>
              <li>
                {elem.text}
              </li>
              <ul>
                <li>
                  {elem.subText}
                </li>
              </ul>
            </ul>
          </div>
            )}
          </Col>
          <Col className="implementation">
            <ListGroup>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
              <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Info;
