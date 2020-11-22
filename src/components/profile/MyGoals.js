import React, { useState, useEffect } from 'react';
import './css/myProfile.css';
import axios from 'axios';
import ladyLift from './images/ladyLift.jpg';
import manStare from './images/manStare.jpeg';

const MyGoals = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal1, setNewGoal1] = useState('');
  const [newGoal2, setNewGoal2] = useState('');
  const [newGoal3, setNewGoal3] = useState('');
  const [newGoal4, setNewGoal4] = useState('');
  const [newGoal5, setNewGoal5] = useState('');

  useEffect(() => {
    axios
      .get('https://work-it-out-2020.herokuapp.com/readGoals')
      .then((response) => {
        if (response.data.length > 0) {
          setGoals(response.data[0]);
        } else {
          setGoals({
            newGoal1: 'Drink more water',
            newGoal2: 'Eat 3 meals daily',
            newGoal3: 'Swim 2x a week',
            newGoal4: 'Run every morning',
            newGoal5: 'Meditate every night',
          });
        }
      });
  }, []);

  const updateGoals = (id) => {
    axios.put('https://work-it-out-2020.herokuapp.com/updateGoals', {
      id: id,
      newGoal1: newGoal1,
      newGoal2: newGoal2,
      newGoal3: newGoal3,
      newGoal4: newGoal4,
      newGoal5: newGoal5,
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
                <small>*Fill out every input</small>
              </span>
              <div className='profileUpdate'>
                <input
                  type='text'
                  placeholder='New Goal'
                  onChange={(e) => {
                    setNewGoal1(e.target.value);
                  }}
                />
                <input
                  type='text'
                  placeholder='New Goal'
                  onChange={(e) => {
                    setNewGoal2(e.target.value);
                  }}
                />
                <input
                  type='text'
                  placeholder='New Goal'
                  onChange={(e) => {
                    setNewGoal3(e.target.value);
                  }}
                />
                <input
                  type='text'
                  placeholder='New Goal'
                  onChange={(e) => {
                    setNewGoal4(e.target.value);
                  }}
                />
                <input
                  type='text'
                  placeholder='New Goal'
                  onChange={(e) => {
                    setNewGoal5(e.target.value);
                  }}
                />
              </div>
              <a
                href='#cardPage'
                className='btn btn-blue updateButton'
                onClick={() => updateGoals(goals._id)}
              >
                Update Goals
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
