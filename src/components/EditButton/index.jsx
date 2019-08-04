import React from 'react';
import './index.scss';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

const EditButton = ({editCard}) => (
  <Button onClick={editCard} className="edit__button">
    <FontAwesomeIcon icon={faEdit} />
  </Button>
);

export default EditButton;
