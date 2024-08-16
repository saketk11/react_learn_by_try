// InputEl.jsx
import React from 'react';

const InputEl = ({ type, ...props }) => {
  if (type === 'text') {
    return <input {...props} />;
  } else if (type === 'button') {
    return <button {...props}>{props.label}<span> Inner SPAN</span></button>;
  } else {
    return null;
  }
};

export default InputEl;
