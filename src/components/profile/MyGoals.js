import React, { useState, useEffect } from 'react';
import './css/myProfile.css';
import axios from 'axios';
import ladyLift from './images/ladyLift.jpg';
import manStare from './images/manStare.jpeg';

const MyGoals = () => {
  const [goals, setGoals] = useState([]);
  const [goal1, setGoal1] = useState('');
  const [goal2, setGoal2] = useState('');
  const [goal3, setGoal3] = useState('');
  const [goal4, setGoal4] = useState('');
  const [goal5, setGoal5] = useState('');

  useEffect(() => {
    axios
      .get('https://work-it-out-2020.herokuapp.com/readGoals')
      .then((response) => {
        if (response.data.length > 0) {
          setGoals(response.data[0]);
        } else {
          setGoals({
            goal1: 'Drink more water',
            goal2: 'Eat 3 meals daily',
            goal3: 'Swim 2x a week',
            goal4: 'Run every morning',
            goal5: 'Meditate every night',
          });
        }
      });
  }, []);

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

  const deleteGoals = (id) => {
    axios.delete(`https://work-it-out-2020.herokuapp.com/deleteGoals/${id}`);
    setTimeout(() => {
      window.location.reload();
    }, 250);
  };

  return (
    <div>
      {/* Card 1 */}
      <div className='card' id='cardPage'>
        <div className='card_side card_side_front'>
          <div className='card_picture card_picture-3'></div>
          <h4 className='card_heading'>
            <span className='card_heading_span heading_span_goals'>
              My Goals
            </span>
          </h4>
          <div className='card_details'>
            <ul className='goalList'>
              <li>Goal 1: {goals.goal1}</li>
              <li>Goal 2: {goals.goal2}</li>
              <li>Goal 3: {goals.goal3}</li>
              <li>Goal 4: {goals.goal4}</li>
              <li>Goal 5: {goals.goal5}</li>
            </ul>
          </div>
        </div>
        <div className='card_side card_side_back card_side_back-1'>
          <div className='card_container'>
            <a href='#popup2' className='btn btn-white'>
              Update Goals
            </a>
          </div>
        </div>
      </div>
      {/* */}
      {/* Popup */}
      <div className='popup' id='popup2'>
        <div className='popup_container'>
          <div className='popup_left'>
            <img src={ladyLift} alt='lady-lift' className='popup_image' />
            <img src={manStare} alt='man-break' className='popup_image' />
          </div>
          <div className='popup_right'>
            <a href='#cardPage' className='popup_close'>
              &times;
            </a>
            <div className='popup_right_container'>
              <span className='small_text'>
                <small>*Delete Goals First Then Post New Goals</small>
              </span>
              <div className='profileUpdate'>
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
              </div>
              <a
                href='#cardPage'
                className='btn btn-blue updateButton'
                onClick={createGoals}
              >
                Post Goals
              </a>
              <a
                href='#cardPage'
                className='btn btn-red updateButton'
                onClick={() => deleteGoals(goals._id)}
              >
                Delete Goals
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* */}
    </div>
  );
};

export default MyGoals;
