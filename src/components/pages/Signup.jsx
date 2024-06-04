import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../src/firebase';
import { async } from '@firebase/util';
function Signup() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [submitDisable, setSubmitDisable] = useState(false);
  const navigate = useNavigate();

  function handleSignup() {
    if (!value.name || !value.email || !value.password) {
      setError(' fill all fields');
      return;
    }

    console.log(value);
    setSubmitDisable(true);
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        console.log('successfully added', res.user);
        const user = res.user;
        await updateProfile(user, {
          displayName: value.name,
        });
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
    <div className='loginMain border border-black flex flex-col  w-2/5 mx-auto my-10 p-4 rounded-lg bg-purple-500'>
      <h2 className='text-center font-bold text-white'>Sign Up</h2>
      <InputControl
        label='Name'
        placeholder='Enter Name'
        type='text'
        onChange={(e) =>
          setValue((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <InputControl
        label='Email'
        placeholder='Enter email'
        type='text'
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
          onClick={handleSignup}
          className='bg-white disabled:bg-gray-300  focus:bg-purple-900
           text-purple focus:text-white font-bold py-1 px-4 rounded'
        >
          SignUp
        </button>
        <span className=''>
          Already have accoount?{' '}
          <Link className='text-white underline' to='/login'>
            Login
          </Link>{' '}
        </span>
      </div>
    </div>
  );
}

export default Signup;
