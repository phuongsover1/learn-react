import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    titleE: 'A First Meetup',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.timetravelturtle.com%2Fwp-content%2Fuploads%2F2013%2F05%2FJapan-2013-1651_new.jpg&f=1&nofb=1&ipt=785cb9a02ece2ff1d997bdcbc9fe7b9ab18a962b9622a9893536bd7eecfb888e&ipo=images',
    address: 'Some Address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    titleE: 'A Second Meetup',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.timetravelturtle.com%2Fwp-content%2Fuploads%2F2013%2F05%2FJapan-2013-1651_new.jpg&f=1&nofb=1&ipt=785cb9a02ece2ff1d997bdcbc9fe7b9ab18a962b9622a9893536bd7eecfb888e&ipo=images',
    address: 'Some Address 5, 12345 Some City',
    description: 'This is a second meetup!',
  },
  {
    id: 'm3',
    titleE: 'A Third Meetup',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.timetravelturtle.com%2Fwp-content%2Fuploads%2F2013%2F05%2FJapan-2013-1651_new.jpg&f=1&nofb=1&ipt=785cb9a02ece2ff1d997bdcbc9fe7b9ab18a962b9622a9893536bd7eecfb888e&ipo=images',
    address: 'Some Address 5, 12345 Some City',
    description: 'This is a third meetup!',
  },
  {
    id: 'm4',
    titleE: 'A Fourth Meetup',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.timetravelturtle.com%2Fwp-content%2Fuploads%2F2013%2F05%2FJapan-2013-1651_new.jpg&f=1&nofb=1&ipt=785cb9a02ece2ff1d997bdcbc9fe7b9ab18a962b9622a9893536bd7eecfb888e&ipo=images',
    address: 'Some Address 5, 12345 Some City',
    description: 'This is a fourth meetup!',
  },
];
const HomePage = () => {
  const [listMeetups, setListMeetups] = useState([]);
  useEffect(() => {
    // send http request
    setListMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={listMeetups} />;
};

export default HomePage;
