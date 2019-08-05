import React, {useState} from 'react';
import {Form} from 'reactstrap';
import Field from '../../components/Field';
import ControlButtons from '../../components/ControlButtons';
import './index.scss';

const EditContents = ({cancel, change, col, index, content}) => {
  const [newContent, setNewContent] = useState(content);
  const FIELDS = [
    {name: 'title', type: 'text'},
    {name: 'text', type: 'textarea'},
    {name: 'translate', type: 'textarea'},
  ];
  const handleSubmit = e => {
    e.preventDefault();
    change(newContent, col, index);
    cancel();
  };

  const handleChange = (e, elem) => {
    setNewContent({...newContent, [elem]: e.target.value});
  };
  return (
    <Form className ='edit__form' onSubmit={handleSubmit}>
      {FIELDS.map((field, i) => (
        <Field
          key={field.name + i}
          name={field.name}
          onChange={handleChange}
          type={field.type}
          content={newContent}
        />
      ))}
      <ControlButtons cancel={cancel} />
    </Form>
  );
};
export default EditContents;
