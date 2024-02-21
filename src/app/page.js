import React from 'react';
import Posts from './posts/page';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-3xl text-center'>Data fetching through next js</h1>
      <Posts />
    </div>
  );
};

export default HomePage;