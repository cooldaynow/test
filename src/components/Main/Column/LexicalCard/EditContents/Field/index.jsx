import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';

const Field = ({name, onChange, type}) => (
  <FormGroup>
    <Label for={name}>Edit {name} : </Label>
    <Input
      id={name}
      type={type}
      onChange={e => onChange(e, name)}
      required="required"
    />
  </FormGroup>
);

export default Field;
