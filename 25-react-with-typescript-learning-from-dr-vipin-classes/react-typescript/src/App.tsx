import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChannelInfo from './components/ChannelInfo';
import PlaylistInfo from './components/PlaylistInfo';

function App() {
  const lang = ['Java', 'Javascript', 'Golang', 'React'];
  return (
    <div className='App'>
      <ChannelInfo name='Dr. Vipin Classes' playlistCount={40} />
      <PlaylistInfo lang={lang} />
    </div>
  );
}

export default App;
