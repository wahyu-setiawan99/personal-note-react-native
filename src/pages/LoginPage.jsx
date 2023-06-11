import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { login } from '../utils/network-data';
import 'react-toastify/dist/ReactToastify.css';
import toastSuccess from '../utils/toast-notification';

function LoginPage({ loginSuccess }) {
  const onLoginUserEventHandler = async (getUser) => {
    const { error, data } = await login(getUser);

    if (!error) {
      toastSuccess('Login success!');

      setTimeout(() => {
        loginSuccess(data);
      }, 1500);
    }
  };

  return (
    <div className="login-user__page">
      <ToastContainer />
      <h2>Sign In</h2>
      <LoginForm loginUser={onLoginUserEventHandler} />

      <div className="to__register-page">
        <p><Link to="/register">No account? Sign up here!</Link></p>
      </div>

    </div>

  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
