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
import { useState } from 'react';
import { useSelector } from 'react-redux';
function DisplayPosts() {
  const [like, setLike] = useState(1);
  const posts = useSelector((state) => state.posts.posts);
  console.log('✅ posts    ', posts);

  const postMenu = (
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
    <div className='bg-white p-4 mb-6 rounded-lg shadow-md  w-3/4 mx-auto my-3 '>
      <div className='postHeader flex justify-between w-full'>
        <div className='userSection flex gap-2 items-center'>
          <Avatar size={48} icon={<UserOutlined />} />
          <div>
            <h2 className='font-semibold m-0'>UserName</h2>
            <p className='m-0 text-sm'>time</p>
          </div>
        </div>
        <Dropdown overlay={postMenu} trigger={['click']}>
          <Button type='secondary' className='p-0 outline-none'>
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      {/* Post Body */}
      <div className='my-2'>
        <p className='m-0 p-0 py-2 border border-black'>post message</p>
        <div className='icons-row flex justify-between items-center px-2 mt-3'>
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
        {/* post footer */}
        <div className='postFooter flex justify-between items-center border-y-2 mt-1 text-sm mb-3 px-2 py-1'>
          <Button
            className='flex items-center gap-1'
            type='secondary'
            onClick={() => {
              alert('liked');
            }}
          >
            {' '}
            <Avatar size={20} icon={<LikeOutlined />} /> Liked
          </Button>
          <Button
            className='flex items-center gap-1'
            type='secondary'
            onClick={() => {
              alert('liked');
            }}
          >
            {' '}
            <Avatar size={20} icon={<CommentOutlined />} /> Commented
          </Button>
          <Button
            className='flex items-center gap-1'
            type='secondary'
            onClick={() => {
              alert('liked');
            }}
          >
            {' '}
            <Avatar size={20} icon={<ShareAltOutlined />} /> Shared
          </Button>
        </div>
      </div>
      {/* Comments Sections */}
      <div className='commentSection w-fulle'>
        {/* Single Comment */}
        <div className='comment'>
          <div className='commentHeader flex justify-between items-center gap-2 w-full'>
            <Avatar size={35} icon={<UserOutlined />} />
            <div className='userSection px-3 py-1 border-0 bg-gray-200 rounded-lg w-full flex justify-between items-center'>
              <div className=' w-full'>
                <p className=' m-0 text-sm'>UserName</p>
                <p className='m-0 text-xs '>comment body</p>
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
        {/* Single Comment End */}

        {/* Add Comment Start */}
        <div className='flex items-center gap-2  p-4'>
          <Avatar size={25} icon={<UserOutlined />} />

          <div className='w-full flex bg-gray-200  px-3 items-center rounded-lg'>
            <Input
              type='text'
              // value={inputValue}
              // onChange={handleInputChange}
              placeholder='write a comment'
              className=' border-0 bg-gray-200 outline-none'
            />
            <span>emoji</span>
          </div>

          <Button className=' p-0 border-0 outline-none'>
            {' '}
            <Avatar
              size={20}
              className='bg-blue-500'
              icon={<RightOutlined />}
            />
          </Button>
        </div>
        {/* Add Comment End */}
      </div>
    </div>
  );
}

export default DisplayPosts;
