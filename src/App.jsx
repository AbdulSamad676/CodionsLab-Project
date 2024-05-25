// import { useState } from 'react';
import React from 'react';
import CreatePost from './components/CreatePost';
import DisplayPosts from './components/DisplayPosts';

function App() {
  return (
    <>
      <CreatePost />
      <h2 className='text-center font-bold underline'>Your Posts </h2>
      <DisplayPosts />
    </>
  );
}

export default App;
