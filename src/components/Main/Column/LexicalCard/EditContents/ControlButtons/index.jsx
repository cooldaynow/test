import React from 'react';
import {Button} from 'reactstrap';
import './index.scss';

function ControlButtons({cancel}) {
  return (
    <div className="edit__buttons">
      <Button color="primary" onClick={cancel}>
        Cancel!
      </Button>
      <Button color="primary" type="submit">
        Submit!
      </Button>
    </div>
  );
}

export default ControlButtons;
