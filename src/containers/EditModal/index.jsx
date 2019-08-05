import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import EditContents from '../EditContents/';
import AddButton from '../../components/AddButton';
import './index.scss';

const EditModal = ({col, change}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <AddButton toggle={toggle} />
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>Add new card</ModalHeader>
        <ModalBody>
          <EditContents col={col} change={change} cancel={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default EditModal;
