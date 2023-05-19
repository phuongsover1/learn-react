import './App.css';
import FormikContainer from './components/FormikContainer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <FormikContainer />
      </div>
    </ChakraProvider>
  );
}

export default App;
