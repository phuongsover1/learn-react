import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: 'Phuong',
  email: '',
  channel: '',
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
function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log('formik touched', formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && (
          <div className='error'>{formik.errors.name}</div>
        )}
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-mail</label>
        <input
          type='text'
          id='email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && (
          <div className='error'>{formik.errors.email}</div>
        )}
      </div>
      <div className='form-control'>
        <label htmlFor='channel'>Channel</label>
        <input
          type='text'
          id='channel'
          name='channel'
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        {formik.errors.channel && (
          <div className='error'>{formik.errors.channel}</div>
        )}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default YoutubeForm;
