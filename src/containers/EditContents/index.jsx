import React, {useState} from 'react';
import {Form} from 'reactstrap';
import './index.scss';
import Field from '../../components/Field';
import ControlButtons from '../../components/ControlButtons';

const EditContents = ({cancel, change, col, index}) => {
  const [state, setState] = useState({title: '', text: '', translate: ''});
  const FIELDS = [
    {name: 'title', type: 'text'},
    {name: 'text', type: 'textarea'},
    {name: 'translate', type: 'textarea'},
  ];
  const handleSubmit = e => {
    e.preventDefault();
    change(state, col, index);
    cancel();
  };

  const handleChange = (e, elem) => {
    setState({...state, [elem]: e.target.value});
  };
  return (
    <Form onSubmit={handleSubmit}>
      {FIELDS.map((field, i) => (
        <Field
          key={field.name + i}
          name={field.name}
          onChange={handleChange}
          type={field.type}
        />
      ))}
      <ControlButtons cancel={cancel} />
    </Form>
  );
};
export default EditContents;
