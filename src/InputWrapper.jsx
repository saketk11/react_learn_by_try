// InputWrapper.jsx
import React from 'react';

const InputWrapper = (WrappedComponent) => {
  return ({ type, ...props }) => {
    switch (type) {
      case 'text':
        return <WrappedComponent type="text" {...props} />;
      case 'button':
        return <WrappedComponent type="button" {...props} />;
      case 'select':
        return (
          <select {...props}>
            {props.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div>
            {props.options.map((option) => (
              <label key={option.value}>
                <input
                  type="radio"
                  name={props.name}
                  value={option.value}
                  {...props}
                />
                {option.label}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };
};

export default InputWrapper;
