// withRoleBasedUI.js HOC

import React from 'react';

const withRoleBasedUI = (WrappedComponent) => {
  return ({ role, ...props }) => {
    if (role === 'admin') {
      return <WrappedComponent {...props} adminView />;
    } else if (role === 'user') {
      return <WrappedComponent {...props} userView />;
    } else {
      return <WrappedComponent {...props} guestView />;
    }
  };
};

export default withRoleBasedUI;
