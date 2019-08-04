import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import EditContents from '../Column/LexicalCard/EditContents/';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const EditModal = ({col, change}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <button className="add__button" onClick={toggle}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      <Modal isOpen={isOpen} toggle={toggle} className="modalnoe">
        <ModalHeader>Add new card</ModalHeader>
        <ModalBody>
          <EditContents col={col} change={change} cancel={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditModal;
