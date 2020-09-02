import React, { useState } from 'react';
import TodoList from './Todolist'


function App() {
  const [todos, setTodos] = useState([])  // Object destructuring
  return (
    <>                     
    <TodoList /> 
    <input type="text" />
    <button>Add Todo</button>    
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>                     
  )
}

export default App;
