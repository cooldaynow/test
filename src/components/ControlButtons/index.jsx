import React from 'react';
import {Button} from 'reactstrap';
import './index.scss';

const ControlButtons = ({cancel}) => (
  <div className="control__buttons__wrap">
    <Button color="primary" onClick={cancel}>
      Cancel!
    </Button>
    <Button color="primary" type="submit">
      Submit!
    </Button>
  </div>
);
export default ControlButtons;
