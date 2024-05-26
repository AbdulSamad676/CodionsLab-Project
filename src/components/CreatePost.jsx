import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Button, Input, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/slices/postsSlice';

function CreatePost() {
  const [postBody, setPostBody] = useState('');
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  function handleAddPost(e) {
    e.preventDefault();
    const newPost = {
      id: nanoid(),
      body: postBody,
      username: 'staticUser',
      created_at: new Date().toISOString(),
      comments: [],
      likes: 1,
      dislikes: 0,
      no_of_comments: 0,
    };
    dispatch(addPost(newPost));
    setPostBody('');
  }
  return (
    <div className='bg-white p-4 mb-6 rounded-lg shadow-md  w-3/4 mx-auto my-3 '>
      <div className='flex items-center gap-2  p-4'>
        <Avatar size={35} icon={<UserOutlined />} />
        <form
          onSubmit={handleAddPost}
          className='flex items-center w-full gap-2'
        >
          <Input
            type='text'
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            placeholder='Write your post here...'
          />
          <Button type='primary' htmlType='submit'>
            Post
          </Button>
        </form>
        {/* <Input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder="What's on your mind?"
          className=' border-0 bg-gray-200'
        />

        <Button type='primary'>Post</Button> */}
      </div>
      <hr className=' my-3 w-11/12 mx-auto' />
      <div className='w-full px-3 flex justify-between  '>
        <p>Protected</p>
        <Button
          type='secondary'
          onClick={() => {
            console.log('Clicked');
          }}
        >
          Feeling/Activity{' '}
        </Button>
      </div>
    </div>
  );
}

export default CreatePost;
