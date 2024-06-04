import React from 'react';
import { Link } from 'react-router-dom';
import InputControl from '../InputControl';

function Login() {
  return (
    <div className='loginMain border border-black flex flex-col gap-5  w-2/5 mx-auto my-10 p-4 rounded-lg bg-purple-500'>
      <h2 className='text-center font-bold text-white'>Login form</h2>
      <InputControl label='Email' placeholder='Enter email' type='text' />
      <InputControl
        label='Password'
        placeholder='Enter Password'
        type='password'
      />
      <button className='bg-white w-4/5 mx-auto hover:bg-purple-500 text-purple font-bold py-1 px-4 rounded'>
        Login
      </button>
      <span className='w-4/5 mx-auto'>
        Dont have accoount ?{' '}
        <Link className='text-white underline' to='/signup'>
          SignUp
        </Link>{' '}
      </span>
    </div>
  );
}

export default Login;
