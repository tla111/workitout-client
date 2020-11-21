import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navigation = () => {
  return (
    <ul className='navList'>
      <li className='listLinks'>
        <Link to='/' className='reactLinks'>
          Create Profile
        </Link>
      </li>
      <li className='listLinks'>
        <Link
          to='https://vigorous-noyce-c8c4bc.netlify.app/myProfile'
          className='reactLinks'
        >
          My Profile
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
