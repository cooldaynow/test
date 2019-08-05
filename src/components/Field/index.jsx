import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';

const Field = ({
  name,
  onChange,
  type,
  content = {title: '', text: '', translate: ''},
}) => (
  <FormGroup>
    <Label htmlFor={name}>
      {name.slice(0, 1).toUpperCase() + name.slice(1)} :{' '}
    </Label>
    <Input
      id={name}
      type={type}
      onChange={e => onChange(e, name)}
      value={content[name]}
      required
    />
  </FormGroup>
);

export default Field;
