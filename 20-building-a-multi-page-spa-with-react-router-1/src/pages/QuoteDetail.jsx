import { Fragment } from 'react';
import { Route, useParams, useLocation, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

import { DUMMY_QUOTES } from './AllQuotes';

const QuoteDetail = () => {
  const params = useParams();
  const location = useLocation();
  const { pathname } = location;
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
  console.log(pathname);

  if (!quote) {
    return <p>Quote not found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${pathname}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
