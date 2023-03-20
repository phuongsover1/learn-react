import { Navigate, Redirect, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import PageNotFound from './pages/PageNotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/quotes' replace />} />

        <Route path='/quotes/*' element={<AllQuotes />} />
        <Route path='/quotes/:quoteId/*' element={<QuoteDetail />} />
        <Route path='/new-quote/' element={<NewQuote />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
