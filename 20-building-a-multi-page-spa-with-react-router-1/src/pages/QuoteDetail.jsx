import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
  const params = useParams();
  console.log(params.quoteId);
  return <h1>Quote Detail Page</h1>;
};

export default QuoteDetail;
