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
    <div className='bg-white p-4 mb-6 rounded-lg shadow-md flex items-center w-3/4 mx-auto my-3 space-x-4'>
      <Avatar size={48} icon={<UserOutlined />} />

      <Input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder="What's on your mind?"
        className=' border-0 bg-gray-200'
      />

      <Button type='primary'>Post</Button>
    </div>
  );
}

export default CreatePost;
