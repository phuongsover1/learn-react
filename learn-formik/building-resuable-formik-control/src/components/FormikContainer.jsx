import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const selectOptions = [
  { key: 'Select option', value: '' },
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' },
];

const genderOptions = [
  { key: 'Male', value: 'male' },
  { key: 'Female', value: 'female' },
];

const hobbies = [
  { key: 'Football', value: 'football' },
  { key: 'Badminton', value: 'badminton' },
  { key: 'Basketball', value: 'basketball' },
];
const initialValues = {
  email: '',
  comments: '',
  selectOption: '',
  gender: '',
  hobbies: [],
};

const validationSchema = Yup.object({
  email: Yup.string().required('Required').email(),
  comments: Yup.string().required('Required'),
  selectOption: Yup.string().required('Please select your option.'),
  gender: Yup.string().required('Required!'),
  hobbies: Yup.array().min(1, 'Must have at least one hobbie'),
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
          <FormikControl name='comments' label='Comments' control='textarea' />
          <FormikControl
            name='selectOption'
            label='Select your favourite option'
            control='select'
            options={selectOptions}
          />
          <FormikControl
            name='gender'
            label='Your gender:'
            control='radio'
            options={genderOptions}
          />
          <FormikControl
            name='hobbies'
            label='What is your hobbies: '
            control='checkbox'
            options={hobbies}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
