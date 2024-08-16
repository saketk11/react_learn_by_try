// withLogging.js HOC

import React from 'react';

const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log(`Button clicked with props: ${JSON.stringify(props)}`);
    return <WrappedComponent {...props} />;
  };
};

export default withLogging;
