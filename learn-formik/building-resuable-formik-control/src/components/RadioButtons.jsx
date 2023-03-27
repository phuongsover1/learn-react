import { ErrorMessage, Field } from 'formik';
import React, { Fragment } from 'react';
import TextError from './TextError';

const RadioButtons = props => {
  const { label, name, options, ...rest } = props;

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => (
            <Fragment key={option.key}>
              <input
                type='radio'
                {...field}
                id={option.value}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
