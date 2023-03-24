import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: 'Phuong',
  email: '',
  channel: '',
  comments: '',
};

const onSubmit = values => {
  console.log('form data', values);
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
  comments: Yup.string().trim(),
});
function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
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
          <Field as='textarea' name='comments' id='comments' />
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
