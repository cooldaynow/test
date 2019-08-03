import React, {useState} from 'react';
import './index.scss';
import {AvForm} from 'availity-reactstrap-validation';
import Field from './Field';
import ControlButtons from './ControlButtons';

const EditContents = ({cancel, change, col, index}) => {
  const [state, setState] = useState({title: '', text: '', translate: ''});
  const FIELDS = [
    {name: 'title', type: 'text'},
    {name: 'text', type: 'textarea'},
    {name: 'translate', type: 'textarea'},
  ];
  const handleSubmit = () => {
    change(state, col, index);
    cancel();
  };

  const handleChange = (e, elem) => {
    setState({...state, [elem]: e.target.value});
  };
  return (
    <AvForm className="edit__contents" onValidSubmit={handleSubmit}>
      {FIELDS.map((field, i) => (
        <Field
          key={field.name + i}
          name={field.name}
          state={state}
          handleChange={handleChange}
          type={field.type}
        />
      ))}
      <ControlButtons cancel={cancel} />
    </AvForm>
  );
};
export default EditContents;
