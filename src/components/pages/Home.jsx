import React from 'react';
import CreatePost from '../CreatePost';
import DisplayPosts from '../DisplayPosts';

function Home() {
  return (
    <div>
      {' '}
      <CreatePost />
      <h2 className='text-center font-bold underline'>Your Posts </h2>
      <DisplayPosts />
    </div>
  );
}

export default Home;
