/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RegistrationForm({ registerUser }) {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handlenameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 6) {
      setNameError('name must be at least 6 characters long.');
      return;
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError('Does not match the password!');
      return;
    }

    registerUser({ name, email, password });
  };
  return (
    <form className="regisration-user__form" onSubmit={handleSubmit}>
      <div className="input__registration">
        <label htmlFor="name">Name: </label>

        <input
          type="text"
          id="name"
          value={name}
          onChange={handlenameChange}
          required
        />
        {nameError && <p className="error-message__registration">{nameError}</p>}
      </div>
      <div className="input__registration">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input__registration">
        <label htmlFor="password">Password:</label>

        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p className="error-message__registration">{passwordError}</p>}

      </div>
      <div className="input__registration">
        <label htmlFor="confirm-password">Confirm password:</label>

        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        {confirmPasswordError && <p className="error-message__registration">{confirmPasswordError}</p>}

      </div>
      <button className="submit__registration" type="submit">Sign Up</button>

    </form>
  );
}

RegistrationForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

export default RegistrationForm;
