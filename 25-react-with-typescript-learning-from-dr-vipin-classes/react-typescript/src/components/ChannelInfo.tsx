import React from 'react';

interface ChannelProps {
  name: string;
  playlistCount: number;
}

const ChannelInfo = (props: ChannelProps) => {
  return (
    <>
      <h2>Welcome to {props.name} for learning Reactt with Typescript</h2>
      <h3>
        We also have {props.playlistCount}+ other playlist for learning Android,
        Kotlin, React & etc.
      </h3>
    </>
  );
};

export default ChannelInfo;
