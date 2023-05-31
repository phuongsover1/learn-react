// our-domain.com/news/something-important
import { useRouter } from 'next/router';
import React from 'react';

const DetailPage = () => {
  const router = useRouter();
  console.log(router.query.newsId);
  return <h1>Detail Page</h1>;
};

export default DetailPage;
