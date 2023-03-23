import React from 'react'

function YoutubeForm() {
  return (
    <form>
      <div className='form-control'>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' />
      </div>
      <div className='form-control'>
        <label htmlFor="email">E-mail</label>
        <input type="text" id='email' name='email' />
      </div>
      <div className='form-control'>
        <label htmlFor="channel">Channel</label>
        <input type="text" id='channel' name='channel' />
      </div>
      <button>Submit</button>


    </form>
  )
}

export default YoutubeForm;
