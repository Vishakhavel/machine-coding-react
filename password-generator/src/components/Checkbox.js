import React from 'react';

const Checkbox = ({ title, checked, uniqueKey, handleCheckBoxClick }) => (
  <div className='checkbox'>
    <input
      id={uniqueKey}
      key={uniqueKey}
      checked={checked}
      type='checkbox'
      name={title}
      onChange={() => {
        handleCheckBoxClick(uniqueKey);
      }}
    />
    <label for={uniqueKey}>{title}</label>
  </div>
);

export default Checkbox;
