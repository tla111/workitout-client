import React, { useState } from 'react';
import './profile.css';
import axios from 'axios';

const Goals = () => {
  const [goal1, setGoal1] = useState('');
  const [goal2, setGoal2] = useState('');
  const [goal3, setGoal3] = useState('');
  const [goal4, setGoal4] = useState('');
  const [goal5, setGoal5] = useState('');

  const createGoals = () => {
    axios.post('https://work-it-out-2020.herokuapp.com/addGoals', {
      goal1: goal1,
      goal2: goal2,
      goal3: goal3,
      goal4: goal4,
      goal5: goal5,
    });

    setTimeout(() => {
      window.location.reload();
    }, 250);
  };

  return (
    <div className='profileContainer'>
      <h1>Create Goals</h1>
      <label>Goal 1</label>
      <input
        type='text'
        placeholder='Drink more water'
        onChange={(e) => setGoal1(e.target.value)}
      />
      <label>Goal 2</label>
      <input
        type='text'
        placeholder='Run every other day'
        onChange={(e) => setGoal2(e.target.value)}
      />
      <label>Goal 3</label>
      <input
        type='text'
        placeholder='Swim twice a week'
        onChange={(e) => setGoal3(e.target.value)}
      />
      <label>Goal 4</label>
      <input
        type='text'
        placeholder='Lift weights 3x a week'
        onChange={(e) => setGoal4(e.target.value)}
      />
      <label>Goal 5</label>
      <input
        type='text'
        placeholder='Eat 5 meals a day'
        onChange={(e) => setGoal5(e.target.value)}
      />
      <button onClick={createGoals}>Create Goals</button>
    </div>
  );
};

export default Goals;
