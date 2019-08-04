import React from 'react';
import {Button} from 'reactstrap';
import './index.scss';

const ControlButtons = ({cancel}) => (
  <div className="edit__buttons">
    <Button color="primary" onClick={cancel}>
      Cancel!
    </Button>
    <Button color="primary" type="submit">
      Submit!
    </Button>
  </div>
);
export default ControlButtons;
