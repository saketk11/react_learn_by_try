// InputField.js

import React from 'react';

const InputField = ({type, adminView, userView, guestView }) => {
    // const elType = type === "text" ? 
  if (adminView) {
    return <input type={type} placeholder="Admin Input" />;
  } else if (userView) {
    return <input type={type} placeholder="User Input" />;
  } else if (guestView) {
    return <input type={type} placeholder="Guest Input" />;
  } else {
    return <input type={type} placeholder="Default Input" />;
  }
};

export default InputField;
