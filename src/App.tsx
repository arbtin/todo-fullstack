import React, {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoTable from './todo/todo-page';
import NewTodoForm from './todo/todo-form';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState([
  {rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'Curt'},
  {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User two'},
  {rowNumber: 3, rowDescription: 'Pet Cat', rowAssigned: 'Mom'},
  {rowNumber: 4, rowDescription: 'Feed Cat', rowAssigned: 'Tim'},
  ])

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    let maxKey = 0;
    if (todos.length > 0) {
      const values = Object.values(todos);
      values.map((row) => {
        const rowValue = row.rowNumber;
       maxKey = Math.max(maxKey, rowValue);
      });
      console.log(maxKey + 1);

      rowNumber = todos[todos.length - 1].rowNumber + 1;
      console.log(rowNumber);
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    if (confirm(`Are you sure you want to delete item "${deleteTodoRowNumber}"?`)){
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }
  }

  const editTodo = (editTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value == editTodoRowNumber;
    });
    setShowAddTodoForm(!showAddTodoForm);
    NewTodoForm(filtered);
  }

  return (
    <>
      <div className='relative overflow-x-auto'>
        <div className='container mx-auto'>
          <h2>Your Todos</h2>
          <TodoTable todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
          <button
          onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          className='rounded-md px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >{showAddTodoForm ? 'Close' : 'Add Todo'}</button>
          {showAddTodoForm &&
        <NewTodoForm addTodo={addTodo} />
        }
        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App