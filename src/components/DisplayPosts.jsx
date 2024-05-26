import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
function DisplayPosts() {
  const posts = useSelector((state) => state.posts.posts);
  console.log('✅ posts    ', posts);
  // const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default DisplayPosts;
