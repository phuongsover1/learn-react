// our-domain/news
import Link from 'next/link';
const NewsPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href='/news/next-js-is-great-framework'>
            NEXT.js is great framework!!
          </Link>
        </li>
        <li>Other Link</li>
      </ul>
    </div>
  );
};

export default NewsPage;
