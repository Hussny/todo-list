import React, { useState, useRef, useEffect } from 'react';
import TodoList from './Todolist'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  const [todos, setTodos] = useState([])  // Object destructuring
  const todoNameRef= useRef()

  // Show during reload
  useEffect(() =>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   if (storageTodos) setTodos(storageTodos)
  }, [])

  // Saves in Local Storage during reload
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify
      (todos))
  }, [todos])

  // TOGGLE FROM COMPLETE TO INCOMPLETE AND VICE VERSA.
function toggleTodos(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

function handleAddTodo(e){
 const name = todoNameRef.current.value
 if ( name ==='') return
 setTodos(prevTodos => {
   return [...prevTodos, { id:uuidv4(), name:name, complete:false}]
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
