import React, { useState } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import Transition from 'react-transition-group/Transition';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setShowBlock] = useState(true);

  const showModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    <div className='App'>
      <h1>React Animations</h1>
      <button onClick={() => setShowBlock(prevState => !prevState)}>
        Toggle
      </button>
      <br />
      <Transition in={showBlock} timeout={3000} mountOnEnter unmountOnExit>
        {state => (
          <>
            <p>{"Transition's state: " + state}</p>
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 3s ease-out',
                opacity: state === 'exiting' || state === 'exited' ? 0 : 1,
              }}
            ></div>
          </>
        )}
      </Transition>
      {modalIsOpen ? (
        <>
          <Modal closed={closeModal} show={modalIsOpen} />
          <Backdrop show={modalIsOpen} />
        </>
      ) : null}

      <button className='Button' type='button' onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
