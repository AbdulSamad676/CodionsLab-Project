import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../src/firebase';

function Login() {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [submitDisable, setSubmitDisable] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    if (!value.email || !value.password) {
      setError(' fill all fields');
      return;
    }

    console.log(value);
    setSubmitDisable(true);
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        console.log('successfully added', res.user);
        const user = res.user;

        navigate('/');
        setSubmitDisable(false);
      })
      .catch((err) => {
        setSubmitDisable(false);
        console.log('error occured', err);
        setError(err.message);
      });
  }
  return (
    <div className='loginMain border border-black flex flex-col gap-5  w-2/5 mx-auto my-10 p-4 rounded-lg bg-purple-500'>
      <h2 className='text-center font-bold text-white'>Login</h2>
      <InputControl
        label='Email'
        placeholder='Enter email'
        type='email'
        onChange={(e) =>
          setValue((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <InputControl
        label='Password'
        placeholder='Enter Password'
        type='password'
        onChange={(e) =>
          setValue((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <div className='footer w-4/5 mx-auto flex flex-col gap-2'>
        <b className='font-semibold text-red-900'> {error}</b>
        <button
          disabled={submitDisable}
          onClick={handleLogin}
          className='bg-white disabled:bg-gray-300  focus:bg-purple-900
           text-purple focus:text-white font-bold py-1 px-4 rounded'
        >
          Login
        </button>
        <span className=''>
          Don't have accoount?{' '}
          <Link className='text-white underline' to='/signup'>
            SignUp
          </Link>{' '}
        </span>
      </div>
    </div>
  );
}

export default Login;
