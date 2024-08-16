// TypeBasedInput.js CAN BE SIMPLIFIED, NO NEED OF A EXTRA FILE
import React from 'react';

const InputEl = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

const withLogging = (WrappedComponent) => {
    return (props) => {
      console.log(`Button clicked with props: ${JSON.stringify(props)}`);
      return <WrappedComponent {...props} />;
    };
  };

// import withLogging from './withLogging';
// import Button from './Button';

const TypeBasedInput = withLogging(InputEl);

export default TypeBasedInput;
