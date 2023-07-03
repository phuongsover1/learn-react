import React from 'react';

interface PlayListInfoProps {
  lang: string[];
}
const PlaylistInfo = (props: PlayListInfoProps) => {
  return (
    <div className='text-start'>
      <h2>We have playlist on following languages</h2>
      <ol>
        {props.lang.map(l => (
          <li key={l}>{l}</li>
        ))}
      </ol>
    </div>
  );
};

export default PlaylistInfo;
