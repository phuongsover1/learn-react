import React from 'react'
import { useFormik } from 'formik';

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: 'Phuong',
      email: '',
      channel: ''
    }
  })

  console.log(formik.values)
  return (
    <form>
      <div className='form-control'>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
      </div>
      <div className='form-control'>
        <label htmlFor="email">E-mail</label>
        <input type="text" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      </div>
      <div className='form-control'>
        <label htmlFor="channel">Channel</label>
        <input type="text" id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />
      </div>
      <button>Submit</button>


    </form>
  )
}

export default YoutubeForm;
