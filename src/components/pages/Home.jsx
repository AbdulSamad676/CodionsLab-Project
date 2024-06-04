import React from 'react';
import CreatePost from '../CreatePost';
import DisplayPosts from '../DisplayPosts';

function Home(props) {
  return (
    <div>
      {' '}
      <CreatePost />
      <h2 className='text-center font-bold underline'>
        Well Come {props.userName}
      </h2>
      <DisplayPosts />
    </div>
  );
}

export default Home;
