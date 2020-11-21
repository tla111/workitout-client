import React, { useState } from 'react';
import './profile.css';
import axios from 'axios';

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [fitnessLevel, setFitnessLevel] = useState('');

  const createProfile = () => {
    axios.post('https://work-it-out-2020.herokuapp.com/addProfile', {
      fullName: fullName,
      userName: username,
      age: age,
      height: height,
      weight: weight,
      fitnessLevel: fitnessLevel,
    });
    setTimeout(() => {
      // window.location.href = '/myProfile';
      window.location.reload()
    }, 250);
  };

  return (
    <div className='profileContainer container-1'>
      <h1>Create Profile</h1>
      <label>Full Name</label>
      <input
        type='text'
        placeholder='John Smith'
        onChange={(e) => setFullName(e.target.value)}
      />
      <label>Username</label>
      <input
        type='text'
        placeholder='@JohnSmith123'
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Age</label>
      <input
        type='text'
        placeholder='25'
        onChange={(e) => setAge(e.target.value)}
      />
      <label>Height in Inches</label>
      <input
        type='text'
        placeholder='72'
        onChange={(e) => setHeight(e.target.value)}
      />
      <label>Weight in Pounds</label>
      <input
        type='text'
        placeholder='150'
        onChange={(e) => setWeight(e.target.value)}
      />
      <label>Fitness Level</label>
      <input
        type='text'
        placeholder='Beginner | Intermediate | Advanced'
        onChange={(e) => setFitnessLevel(e.target.value)}
      />
      <button onClick={createProfile}>Create Profile</button>
    </div>
  );
};

export default Profile;
