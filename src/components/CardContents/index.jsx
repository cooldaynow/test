import React from 'react';
import {CardText, CardBody, CardTitle} from 'reactstrap';

const CardContents = ({title, text, active, translate}) => (
  <CardBody>
    <CardTitle>{title}</CardTitle>
    <CardText>{active ? translate : text}</CardText>
  </CardBody>
);
export default CardContents;
