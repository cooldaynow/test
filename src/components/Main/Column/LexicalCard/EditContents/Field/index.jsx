import React from 'react';
import {AvField} from 'availity-reactstrap-validation';

const Field = ({name, handleChange, state, type}) => {
  return (
    <AvField
      onChange={e => handleChange(e, name)}
      name={name}
      label={`Edit ${name}:`}
      valid={state[name] ? true : false}
      type={type}
      required
    />
  );
};

export default Field;
