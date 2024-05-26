import React from 'react';

import { Button, Input, Avatar, Menu, Dropdown } from 'antd';
import {
  UserOutlined,
  DownOutlined,
  EditOutlined,
  DeleteOutlined,
  LikeOutlined,
  LikeFilled,
  ShareAltOutlined,
  CommentOutlined,
  RightOutlined,
} from '@ant-design/icons';

function Comment({ comment }) {
  const commentMenu = (
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
    <div className='comment my-2'>
      <div className='commentHeader flex justify-between items-center gap-2 w-full'>
        <Avatar size={35} icon={<UserOutlined />} />
        <div className='userSection px-3 py-1 border-0 bg-gray-200 rounded-lg w-full flex justify-between items-center'>
          <div className=' w-full'>
            <p className=' m-0 text-sm font-semibold'>{comment.commentedBy}</p>
            <p className='m-0 text-xs '>{comment.commentBody}</p>
          </div>
          <Dropdown overlay={commentMenu} trigger={['click']}>
            <Button type='secondary' className='p-0 outline-none'>
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
      <span className='text-xs mx-10'>few minutes ago</span>
    </div>
  );
}

export default Comment;
