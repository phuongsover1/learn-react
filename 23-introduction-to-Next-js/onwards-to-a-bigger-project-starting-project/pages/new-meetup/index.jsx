// our-domain.com/new-meetup
import React from 'react';
import MeetupForm from '../../components/meetups/NewMeetupForm';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUpPage = () => {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}>NewMeetUpPage</NewMeetupForm>
  );
};

export default NewMeetUpPage;
