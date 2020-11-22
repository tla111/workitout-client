import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/myProfile.css';
import manLift1 from './images/lifting.jpeg';
import manLift2 from './images/manLift.jpg';

const MyProfile = () => {
  const [profile, setProfile] = useState([]);
  const [newUsername, setNewUsername] = useState('');
  const [newWeight, setNewWeight] = useState(0);
  const [newFitnessLevel, setNewFitnessLevel] = useState('');

  useEffect(() => {
    axios
      .get('https://work-it-out-2020.herokuapp.com/readProfile')
      .then((response) => {
        if (response.data.length > 0) {
          setProfile(response.data[0]);
        } else {
          setProfile({
            fullName: 'Create Profile',
            userName: 'Create Profile',
            age: 0,
            height: 0,
            weight: 0,
            fitnessLevel: 'Create Profile',
          });
        }
      });
  }, []);

  const updateProfile = (id) => {
    axios.put('https://work-it-out-2020.herokuapp.com/updateProfile', {
      id: id,
      newUsername: newUsername,
      newWeight: newWeight,
      newFitnessLevel: newFitnessLevel,
    });
    setTimeout(() => {
      window.location.reload();
    }, 250);
  };

  const deleteProfile = (id) => {
    axios.delete(`https://work-it-out-2020.herokuapp.com/deleteProfile/${id}`);
    setTimeout(() => {
      window.location.reload();
    }, 250);
  };

  return (
    <div>
      {/* Card 1 */}
      <div className='card' id='cardPage'>
        <div className='card_side card_side_front'>
          <div className='card_picture card_picture-1'></div>
          <h4 className='card_heading'>
            <span className='card_heading_span'>My Profile</span>
          </h4>
          <div className='card_details'>
            <ul>
              <li>Full Name: {profile.fullName}</li>
              <li>Username: {profile.userName}</li>
              <li>Age: {profile.age}</li>
              <li>Height: {profile.height}</li>
              <li>Weight: {profile.weight}</li>
              <li>Fitness Level: {profile.fitnessLevel}</li>
              <li>
                BMI Level:{' '}
                {Math.round(
                  (profile.weight / Math.pow(profile.height, 2)) * 703
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card_side card_side_back card_side_back-1'>
          <div className='card_container'>
            <a href='#popup1' className='btn btn-white'>
              Update Profile
            </a>
          </div>
        </div>
      </div>
      {/* */}

      {/* Popup */}
      <div className='popup' id='popup1'>
        <div className='popup_container'>
          <div className='popup_left'>
            <img src={manLift1} alt='man-lift-1' className='popup_image' />
            <img src={manLift2} alt='man-lift-2' className='popup_image' />
          </div>
          <div className='popup_right'>
            <a href='#cardPage' className='popup_close'>
              &times;
            </a>
            <div className='popup_right_container'>
              <span className='small_text'>
                <small>*Fill out every input</small>
              </span>
              <div className='profileUpdate'>
                <input
                  type='text'
                  placeholder='New Username'
                  onChange={(e) => {
                    setNewUsername(e.target.value);
                  }}
                />
                <input
                  type='number'
                  placeholder='New Weight'
                  onChange={(e) => {
                    setNewWeight(e.target.value);
                  }}
                />
                <input
                  type='text'
                  placeholder='New Fitness Level'
                  onChange={(e) => {
                    setNewFitnessLevel(e.target.value);
                  }}
                />
              </div>
              <a
                href='#cardPage'
                className='btn btn-blue updateButton'
                onClick={() => updateProfile(profile._id)}
              >
                Update Profile
              </a>
              <a
                href='#cardPage'
                className='btn btn-red updateButton'
                onClick={() => deleteProfile(profile._id)}
              >
                Delete Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* */}
    </div>
  );
};

export default MyProfile;
