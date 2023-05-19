import { useCallback, useState } from 'react';
import './App.css';
import Button from './components/Button';
import DemoOutput from './components/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const toggleParagraphHandler = useCallback(() => {
    console.log('IN TOGGLE PARAGRAPH');
    console.log('allowToggle: ', allowToggle);
    if (allowToggle) {
      setShowParagraph(prevState => !prevState);
    }
  }, [allowToggle]);
  return (
    <div className='App'>
      <h1>Hi there</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>
        Toggle Paragraph
      </Button>
    </div>
  );
}

export default App;
