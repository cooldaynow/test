import React from 'react';
import {CardText, CardBody, CardTitle} from 'reactstrap';

const CardContents = ({content, click}) => {
  const {title, text, translate} = content;
  const textCenter = {textAlign: 'center'};
  return (
    <CardBody style={textCenter}>
      <CardTitle>{title}</CardTitle>
      <CardText>{click ? translate : text}</CardText>
    </CardBody>
  );
};
export default CardContents;
