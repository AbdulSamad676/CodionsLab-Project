import React from 'react';
import { Link } from 'react-router-dom';
import CreatePost from '../CreatePost';
import DisplayPosts from '../DisplayPosts';

function Home(props) {
  return (
    <div>
      {!props.userName && (
        <div className='authSection fixed top-3 right-2 w-full flex justify-end gap-2'>
          <Link
            to='/login'
            className='bg-blue-500   focus:bg-white
           text-white focus:text-blue font-bold py-1 px-4 rounded'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='bg-blue-500   focus:bg-white
           text-white focus:text-blue font-bold py-1 px-4 rounded'
          >
            SignUp
          </Link>
        </div>
      )}

      <CreatePost />
      <h2 className='text-center font-bold underline'>
        Well Come {props.userName}
      </h2>
      <DisplayPosts />
    </div>
  );
}

export default Home;
