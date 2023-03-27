import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextError from './TextError';

const DateView = props => {
  const { name, label, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          console.log('valua', value);
          return (
            <ReactDatePicker
              id={name}
              {...field}
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DateView;
