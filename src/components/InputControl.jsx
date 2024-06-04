import React from 'react';

function InputControl(props) {
  return (
    <div className='flex w-4/5 flex-col rounded-sm mx-auto my-2'>
      {props.label && (
        <label className='font-semibold text-white'> {props.label}</label>
      )}
      <input
        className='outline-none px-2 py-1 border-0 rounded-sm'
        type={props.type}
        {...props}
      />
    </div>
  );
}

export default InputControl;
