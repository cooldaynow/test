import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';
import './index.scss';
const Field = ({
  name,
  onChange,
  type,
  content = {title: '', text: '', translate: ''},
}) => (
  <FormGroup>
    <Label htmlFor={name} className="field__header">
      {name}
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
