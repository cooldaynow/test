import React from 'react';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const DeleteButton = ({edit, removeCard}) => (
  <Button className="delete__button" onClick={edit ? null : removeCard}>
    <FontAwesomeIcon icon={faTrash} />
  </Button>
);

export default DeleteButton;
