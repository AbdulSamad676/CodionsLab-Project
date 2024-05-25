import React from 'react';

import { Button, Input, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

function CreatePost() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='bg-white p-4 mb-6 rounded-lg shadow-md  w-3/4 mx-auto my-3 '>
      <div className='flex items-center gap-2  p-4'>
        <Avatar size={35} icon={<UserOutlined />} />

        <Input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder="What's on your mind?"
          className=' border-0 bg-gray-200'
        />

        <Button type='primary'>Post</Button>
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
