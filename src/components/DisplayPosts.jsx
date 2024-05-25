import React from 'react';
import { Button, Input, Avatar, Menu, Dropdown } from 'antd';
import {
  UserOutlined,
  DownOutlined,
  EditOutlined,
  DeleteOutlined,
  LikeOutlined,
  LikeFilled,
} from '@ant-design/icons';
import { useState } from 'react';
function DisplayPosts() {
  const [like, setLike] = useState(1);

  const menu = (
    <Menu>
      <Menu.Item key='1'>
        <Button
          className='border-0 bg-green-600'
          onClick={() => {
            alert('clicked');
          }}
        >
          <Avatar size={20} icon={<EditOutlined />} />
        </Button>
      </Menu.Item>
      <Menu.Item key='2'>
        <Button
          className='border-0 bg-red-600'
          onClick={() => {
            alert('clicked');
          }}
        >
          <Avatar size={20} icon={<DeleteOutlined />} />
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className='bg-white p-4 mb-6 rounded-lg shadow-md  w-3/4 mx-auto my-3 '>
      <div className='postHeader flex justify-between w-full'>
        <div className='userSection flex gap-2 items-center'>
          <Avatar size={48} icon={<UserOutlined />} />
          <div>
            <h2 className='font-semibold m-0'>UserName</h2>
            <p className='m-0 text-sm'>time</p>
          </div>
        </div>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button type='secondary' className='p-0 outline-none'>
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      {/* Post Body */}
      <div className='my-2'>
        <p className='m-0 p-0 py-2 border border-black'>post message</p>
        <div className='icons-row flex justify-between px-2'>
          <span>
            {like && (
              <Avatar size={20} className='bg-blue-500' icon={<LikeFilled />} />
            )}
          </span>
          <div className='flex gap-5 text-sm'>
            <span>1 Comment</span>
            <span>0 Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayPosts;
