import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const initialValues = {};
const validationSchema = Yup.object({});
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
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
