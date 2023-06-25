import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChannelInfo from './components/ChannelInfo';

function App() {
  return (
    <div className='App'>
      <ChannelInfo name='Dr. Vipin Classes' playlistCount={40} />
      <p>sas</p>
    </div>
  );
}

export default App;
