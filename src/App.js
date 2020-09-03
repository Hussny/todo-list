import React, { useState, useRef } from 'react';
import TodoList from './Todolist'


function App() {
  const [todos, setTodos] = useState([])  // Object destructuring
  const todoNameRef= useRef()

function handleAddTodo(e){
 const name = todoNameRef.current.value
 if ( name ==='') return
 setTodos(prevTodos => {
   return [...prevTodos, { id:1, name:name, complete:false}]
 })
 todoNameRef.current.value = null // clear the input 

}

  return (
    <>                     
    <TodoList todos={todos} /> 
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>    
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>                     
  )
}

export default App;
