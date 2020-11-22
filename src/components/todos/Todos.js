import React, { useState, useEffect } from 'react';
import './todos.css';
import axios from 'axios';

const Todos = () => {
  const [todos, setTodos] = useState('');
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    axios
      .get('https://work-it-out-2020.herokuapp.com/readTodos')
      .then((response) => {
        if (response.data.length > 0) {
          setTodosList(response.data);
        } else {
          setTodosList(['Drink more water', 'Sleep more']);
        }
      });
  }, []);

  const addTodo = () => {
    axios.post('https://work-it-out-2020.herokuapp.com/addTodos', {
      todos: todos,
    });

    setTimeout(() => {
      window.location.reload();
    }, 250);
  };

  const deleteTodo = (id) => {
    axios.delete(`https://work-it-out-2020.herokuapp.com/deleteTodos/${id}`);
    setTimeout(() => {
      window.location.reload();
    }, 250);
  };

  return (
    <div>
      {/* Todos Header Container */}
      <div className='todos_header_container'>
        <h1 className='todos_header'>Todos List for the Week</h1>
        <div className='add_todo_container'>
          <input type='text' onChange={(e) => setTodos(e.target.value)} />
          <button className='todo_button' onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </div>
      {/* */}
      {/* Todos */}
      {todosList.map((val, key) => {
        return (
          <div key={key} className='todosList'>
            <p>{val.todos}</p>
            <div className='todosList_buttons'>
              {/* <button className='todo_btn-1'>Update Todo</button> */}
              <button
                className='todo_btn-2'
                onClick={() => {
                  deleteTodo(val._id);
                }}
              >
                Delete Todo
              </button>
            </div>
          </div>
        );
      })}
      {/* */}
    </div>
  );
};

export default Todos;
