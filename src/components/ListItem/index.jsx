import React from 'react';
import {ListGroupItem} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import data from '../../api/text.js';
const ListItem = ({}) => {

  console.log(data);
  return (
    <ListGroupItem>
      <FontAwesomeIcon
        icon={faPlus}
        className="fa__plus"
      />
    </ListGroupItem>
  );
};

export default ListItem;
