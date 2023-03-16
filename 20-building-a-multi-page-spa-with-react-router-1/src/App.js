import { useEffect } from 'react';

function App() {
  let a = 3;
  useEffect(() => {
    const b = a;
  }, []);
  return <div>Hello World1</div>;
}

export default App;
