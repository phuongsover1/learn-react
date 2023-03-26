import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const initialValues = { emai: '' };
const validationSchema = Yup.object({
  email: Yup.string().required('Required'),
});
const onSubmitHandler = values => {
  console.log('form data:', values);
};
const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler}
    >
      {formik => (
        <Form>
          <FormikControl
            name='email'
            label='Email'
            control='input'
            type='email'
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
