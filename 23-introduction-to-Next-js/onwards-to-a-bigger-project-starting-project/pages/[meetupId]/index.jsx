import React, { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = props => {
  const meetupData = props.meetupData;
  console.log('meetupData', meetupData);
  return (
    <MeetupDetail
      imageSrc={meetupData.imageSrc}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  console.log('context: ', context);
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        imageSrc:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.timetravelturtle.com%2Fwp-content%2Fuploads%2F2013%2F05%2FJapan-2013-1651_new.jpg&f=1&nofb=1&ipt=785cb9a02ece2ff1d997bdcbc9fe7b9ab18a962b9622a9893536bd7eecfb888e&ipo=images',
        title: 'A First Meetup',
        address: 'Some Street 5, Some City',
        description: 'The meetup description',
      },
    },
  };
}

export default MeetupDetails;
