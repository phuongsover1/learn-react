import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { Fragment } from 'react';
import * as Yup from 'yup';
import ErrorText from './ErrorText';

const initialValues = {
  name: 'Phuong',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};

const onSubmit = (values, onSubmitProps) => {
  console.log('form data', values);
  console.log('obSubmitValue', onSubmitProps);
  onSubmitProps.resetForm();
};

const validate = values => {
  const error = {};

  if (!values.name) {
    error.name = 'Required';
  }
  if (!values.email) {
    error.email = 'Required';
  }
  if (!values.channel) {
    error.channel = 'Required';
  }

  return error;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().trim().required('Required!'),
  address: Yup.string().trim().required('Required'),
});

const validateComments = value => {
  let error = null;
  if (!value) error = 'Required!';
  return error;
};
function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      {formik => (
        <Form>
          {console.log('formik obj:', formik)}
          <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <Field type='text' id='name' name='name' />

            <ErrorMessage name='name' />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>E-mail</label>
            <Field type='text' id='email' name='email' />
            <ErrorMessage name='email' />
          </div>
          <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <Field
              type='text'
              id='channel'
              name='channel'
              placeholder='Please enter youtube channel'
            />
            <ErrorMessage name='channel' />
          </div>
          <div className='form-control'>
            <label htmlFor='comments'>Comments</label>
            <Field
              as='textarea'
              name='comments'
              id='comments'
              validate={validateComments}
            />
            <ErrorMessage name='comments'>
              {error => {
                return <ErrorText>{error}</ErrorText>;
              }}
            </ErrorMessage>
          </div>
          <div className='form-control'>
            <label htmlFor='address'>Address</label>
            <Field name='address'>
              {props => {
                const { field, meta } = props;
                return (
                  <Fragment>
                    <input type='text' {...field} />
                    {meta.touched && meta.error && (
                      <div className='error'>{meta.error}</div>
                    )}
                  </Fragment>
                );
              }}
            </Field>
          </div>
          <div className='form-control'>
            <label htmlFor='facebook'>Facebook</label>
            <Field type='text' id='facebook' name='social.facebook' />
          </div>
          <div className='form-control'>
            <label htmlFor='twitter'>Twitter</label>
            <Field type='text' id='twitter' name='social.twitter' />
          </div>
          <div className='form-control'>
            <label htmlFor='primaryPh'>Primary Phone Number</label>
            <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
          </div>
          <div className='form-control'>
            <label htmlFor='secondaryPh'>Secondary Phone Number</label>
            <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
          </div>
          <div className='form-control'>
            <label>List of phone numbers</label>
            <FieldArray name='phNumbers'>
              {fieldArrayProps => {
                const { push, remove, form } = fieldArrayProps;
                console.log('form error:', form.errors);
                const { values } = form;
                const { phNumbers } = values;

                return (
                  <Fragment>
                    {phNumbers.map((phNumber, index) => {
                      return (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button
                              type='button'
                              onClick={remove.bind(null, index)}
                            >
                              {' '}
                              -{' '}
                            </button>
                          )}
                          <button type='button' onClick={push.bind(null, '')}>
                            {' '}
                            +{' '}
                          </button>
                        </div>
                      );
                    })}
                  </Fragment>
                );
              }}
            </FieldArray>
          </div>

          <button type='reset'>Reset</button>
          <button type='submit' disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default YoutubeForm;
