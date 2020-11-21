import React from 'react';
import Profile from '../components/createProfile/Profile';
import './registerScreen.css';

const RegisterScreen = () => {
  return (
    <div className='registerContainer'>
      <div className='boxes_container'>
        <div className='register_title'>WORK.IT.OUT</div>
        <div className='boxes_register box_left'></div>
        <div className='boxes_register box_right'>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
