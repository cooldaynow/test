import React from 'react';
import './index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const AddButton = ({toggle}) =>( 
    <button className="add__button" onClick={toggle}>
      <FontAwesomeIcon icon={faPlusSquare} />
    </button>
  );

export default AddButton;
