import React, { useState, useEffect } from 'react';
import './bmi.css';
import axios from 'axios';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import PoolIcon from '@material-ui/icons/Pool';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

const MyBMI = () => {
  const [profile, setProfile] = useState([]);

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
            id: 100,
          });
        }
      });

    const height = profile.height;
    const weight = profile.weight;
    let bmi = Math.round((weight / Math.pow(height, 2)) * 703);

    if (bmi <= 18.5) {
      document.getElementById('box1').classList.add('select');
    } else if (bmi > 18.5 && bmi <= 25) {
      document.getElementById('box2').classList.add('select');
    } else if (bmi > 25 && bmi <= 30) {
      document.getElementById('box3').classList.add('select');
    } else if (bmi > 30) {
      document.getElementById('box4').classList.add('select');
    }
  }, [profile]);

  return (
    <div className='bmi_container'>
      <div className='boxes' id='box1'>
        <h2 className='bmiLevel_header'>Underweight</h2>
        <FastfoodIcon className='bmiIcons' />
        <ul>
          <li>Eat 5 Meals a Day</li>
          <li>Lift 4x Times a Week</li>
          <li>50 Push-Ups Daily</li>
          <li>75 Squats Every Other Day</li>
          <li>Abdominal Exercises Every Other Day</li>
        </ul>
      </div>
      <div className='boxes' id='box2'>
        <h2 className='bmiLevel_header'>Healthy Weight</h2>
        <FitnessCenterIcon className='bmiIcons' />
        <ul>
          <li>Eat 3 Meals a Day</li>
          <li>Lift 3x Times a Week</li>
          <li>25 Push-Ups Daily</li>
          <li>50 Squats Every Other Day</li>
          <li>Abdominal Exercises Every Other Day</li>
        </ul>
      </div>
      <div className='boxes' id='box3'>
        <h2 className='bmiLevel_header'>Overweight</h2>
        <DirectionsRunIcon className='bmiIcons' />
        <ul>
          <li>Eat 2 Big Meals a Day</li>
          <li>Lift 3x Times a Week</li>
          <li>Run 1/2 a Mile Every Morning</li>
          <li>Swim Every Other Day</li>
          <li>Abdominal Exercises Every Other Day</li>
        </ul>
      </div>
      <div className='boxes' id='box4'>
        <h2 className='bmiLevel_header'>Obese</h2>
        <PoolIcon className='bmiIcons' />

        <ul>
          <li>Eat 2 Meals a Day</li>
          <li>Lift 3x Times a Week</li>
          <li>Run 1 a Mile Every Morning</li>
          <li>Swim Every Day</li>
          <li>Abdominal Exercises Every Other Day</li>
        </ul>
      </div>
    </div>
  );
};

export default MyBMI;
