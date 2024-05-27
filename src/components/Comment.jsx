import React from 'react';
import { deleteComment, editComment } from '../store/slices/postsSlice';
import { Button, Input, Avatar, Menu, Dropdown } from 'antd';

import {
  SmileOutlined,
  UserOutlined,
  DownOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Comment({ comment, postId }) {
  const dispatch = useDispatch();
  const [editingComment, setEditingComment] = useState(false);
  const [editBody, setEditBody] = useState(comment.commentBody);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addEmoji = (emoji) => {
    setEditBody((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  const handleEmojiPickerToggle = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  function handleEditComment(e) {
    e.preventDefault();
    const commentId = comment.id;
    dispatch(editComment({ postId, commentId, body: editBody }));
    setEditingComment(false); // Set editingComment to false after saving
  }

  const commentMenu = (
    <Menu>
      <Menu.Item key='1'>
        <Button
          className='border-0 bg-green-600'
          onClick={() => {
            setEditingComment((prev) => !prev);
          }}
        >
          <Avatar size={20} icon={<EditOutlined />} />
        </Button>
      </Menu.Item>
      <Menu.Item key='2'>
        <Button
          className='border-0 bg-red-600'
          onClick={() => {
            dispatch(deleteComment({ postId, commentId: comment.id }));
          }}
        >
          <Avatar size={20} icon={<DeleteOutlined />} />
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='comment my-2'>
      {editingComment ? (
        <form
          onSubmit={handleEditComment}
          className='w-full flex items-center gap-2 border border-black rounded-sm p-2'
        >
          <div className='w-full flex bg-gray-200 px-3 items-center rounded-lg'>
            <Input
              type='text'
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              className='border-0 bg-gray-200 outline-none focus:bg-transparent'
            />
            <Button
              type='text'
              icon={<SmileOutlined />}
              onClick={handleEmojiPickerToggle}
            />
            {showEmojiPicker && (
              <div className='emoji-picker'>
                <Picker data={data} onEmojiSelect={addEmoji} />
              </div>
            )}
          </div>

          <Button
            type='primary'
            htmlType='submit'
            className='text-sm font-semibold'
          >
            Update
          </Button>
        </form>
      ) : (
        <div>
          <div className='commentHeader flex justify-between items-center gap-2 w-full'>
            <Avatar size={35} icon={<UserOutlined />} />
            <div className='userSection px-3 py-1 border-0 bg-gray-200 rounded-lg w-full flex justify-between items-center'>
              <div className='w-full'>
                <p className='m-0 text-sm font-semibold'>
                  {comment.commentedBy}
                </p>
                <p className='m-0 text-xs'>{comment.commentBody}</p>
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
      )}
    </div>
  );
}

export default Comment;
