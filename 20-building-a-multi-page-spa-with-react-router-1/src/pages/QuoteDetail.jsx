import { Fragment, useEffect } from 'react';
import { Route, useParams, Link, Routes } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const params = useParams();
  const id = params.quoteId;
  const {
    sendRequest,
    data: quote,
    status,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className='centered focused'>{error}</div>;
  }

  if (status === 'completed' && !quote) {
    return <p>Quote not found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route
          path=''
          element={
            <div className='centered'>
              <Link className='btn--flat' to={`comments`}>
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path={'comments'} element={<Comments id={quote.id} />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
