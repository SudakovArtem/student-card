import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({label, type, name, value, onChange, error}) => {
  const getInputClasses = () => {
    return 'form-control ' + (error ? 'is-invalid' : '');
  };
  return (
    <div className="mb-4">
      <label htmlFor="email">{label}</label>
      <div className="input-group has-validation">
        <input
          className={getInputClasses()}
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}/>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: 'text'
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default TextField;
