import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Button from './components/Button';
import DemoList from './components/DemoList';
import logo from './logo.svg';
function App() {
  console.log('APP RUNNING');
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = () => {
    console.log('IN CHANGE TITLE HANDLER');
    setListTitle('New Title');
  };
  const items = useMemo(() => [2, 4, 1, 5, 6, 3], []);
  return (
    <div className='App'>
      <h2>{listTitle}</h2>
      <DemoList title={listTitle} items={items} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
