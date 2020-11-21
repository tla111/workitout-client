import React, { useState, useEffect } from 'react';
import './todos.css';
import axios from 'axios';

const Todos = () => {
  const [todos, setTodos] = useState('');
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/readTodos').then((response) => {
      setTodosList(response.data);
    });
  }, []);

  const addTodo = () => {
    axios.post('http://localhost:3001/addTodos', {
      todos: todos,
    });

    setTimeout(() => {
      window.location.reload();
    }, 250);
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/deleteTodos/${id}`);
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
