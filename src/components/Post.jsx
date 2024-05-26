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
import { useDispatch } from 'react-redux';
import { addComment } from '../store/slices/postsSlice';
import Comment from './Comment';

function Post({ post }) {
  const dispatch = useDispatch();
  // const [like, setLike] = useState(0);
  const [commentBody, setCommentBody] = useState('');
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

  const onSubmit = (e) => {
    e.preventDefault();
    const postId = post.id;
    if (commentBody) {
      dispatch(addComment({ postId, commentBody }));
      setCommentBody('');
    }
  };

  return (
    <div className='bg-white p-4 mb-6 rounded-lg shadow-md  w-3/4 mx-auto my-3 '>
      <div className='postHeader flex justify-between w-full'>
        <div className='userSection flex gap-2 items-center'>
          <Avatar size={48} icon={<UserOutlined />} />
          <div>
            <h2 className='font-semibold m-0'>{post.username}</h2>
            <p className='m-0 text-sm'>{post.created_at}</p>
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
        <p className='m-0 p-0 py-2 border border-black'>{post.body}</p>
        <div className='icons-row flex justify-between items-center px-2 mt-3'>
          <span>
            {post.likes}
            {post.likes && (
              <Avatar
                size={20}
                className='bg-blue-500 mx-1'
                icon={<LikeFilled />}
              />
            )}
          </span>
          <div className='flex gap-5 text-sm'>
            <span>1 Comment</span>
            <span>0 Share</span>
          </div>
        </div>
        {/* post footer */}
        <div className='postFooter box-border flex justify-between items-center border-y-2 mt-1 text-sm mb-3 px-2 py-1'>
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
        <div>
          {post.comments?.map((comment) => {
            return (
              <Comment key={comment.id} postId={post.id} comment={comment} />
            );
          })}
        </div>
        {/* Single Comment End */}

        {/* Add Comment Start */}
        {/* there will be a form here */}
        <div className='flex items-center gap-2  p-4'>
          <Avatar size={25} icon={<UserOutlined />} />
          <form onSubmit={onSubmit} className=' w-full flex gap-2'>
            <div className='w-full flex bg-gray-200  px-3 items-center rounded-lg'>
              <Input
                type='text'
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                placeholder='write a comment'
                className=' border-0 bg-gray-200 outline-none focus:bg-transparent'
              />
              <span>emoji</span>
            </div>

            <Button className=' p-0 border-0 outline-none' htmlType='submit'>
              {' '}
              <Avatar
                size={20}
                className='bg-blue-500'
                icon={<RightOutlined />}
              />
            </Button>
          </form>
        </div>

        {/* Add Comment End */}
      </div>
    </div>
  );
}

export default Post;
