import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../utils/network-data';
import RegistrationForm from '../components/RegistrationForm';
import toastSuccess from '../utils/toast-notification';

function RegistrationPage() {
  const navigate = useNavigate();

  const onRegisterUserEventHandler = async (postUser) => {
    const { error } = await register(postUser);
    if (!error) {
      toastSuccess('Account successfully created!');

      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  return (
    <div className="regisration-user__page">
      <ToastContainer />
      <h2>Registration Form</h2>
      <RegistrationForm registerUser={onRegisterUserEventHandler} />

      <div className="to__login-page">
        <p>
          Already have account?
          {' '}
          <Link to="/login">Login here!</Link>
        </p>
      </div>
    </div>

  );
}

export default RegistrationPage;
