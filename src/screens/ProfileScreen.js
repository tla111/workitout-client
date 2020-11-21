import React from 'react';
import MyProfile from '../components/profile/MyProfile';
import MotivationPic from '../components/profile/MotivationPic';
import MyGoals from '../components/profile/MyGoals';
import MyBMI from '../components/bmiLevel/MyBMI';
import Todos from '../components/todos/Todos';
import BeginnerVideos from '../components/getInspired/BeginnerVideos';
import IntermediateVideos from '../components/getInspired/IntermediateVideos';
import AdvancedVideos from '../components/getInspired/AdvancedVideos';
import './profileScreen.css';

const ProfileScreen = () => {
  return (
    <div className='profileScreen'>
      <div className='myProfileContainer'>
        <MyProfile />
        <MotivationPic />
        <MyGoals />
      </div>
      <div className='bmi_level_container'>
        <h1 className='bmi_level_header'>
          Your Workout Plan According to Your BMI Level
        </h1>
        <MyBMI />
      </div>
      <div className='todos_container'>
        <Todos />
      </div>
      <div className='inspired_container'>
        <BeginnerVideos />
        <IntermediateVideos />
        <AdvancedVideos />
      </div>
    </div>
  );
};

export default ProfileScreen;
