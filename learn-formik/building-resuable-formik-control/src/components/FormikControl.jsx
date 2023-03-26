import React from 'react';
import Input from './Input';
import Select from './Select';
import RadioButtons from './RadioButtons';

const FormikControl = props => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
    case 'textarea':
      return <Input as={control} {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
    case 'date':
    default:
      return null;
  }
};

export default FormikControl;
