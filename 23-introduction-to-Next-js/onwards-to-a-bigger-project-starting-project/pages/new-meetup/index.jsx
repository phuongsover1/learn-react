// our-domain.com/new-meetup
import React from 'react';
import MeetupForm from '../../components/meetups/NewMeetupForm';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUpPage = () => {
  async function addMeetupHandler(enteredMeetupData) {
    console.log('meetupData: ', enteredMeetupData);

    // const id = ObjectId(Math.floor(Math.random() * 100));
    console.log('stringify: ', JSON.stringify(enteredMeetupData));

    const response = await fetch('http://localhost:3000/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('data in form: ', data);
  }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}>NewMeetUpPage</NewMeetupForm>
  );
};

export default NewMeetUpPage;
