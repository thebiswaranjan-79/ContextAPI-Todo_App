import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([
    {id : 1, text:'todo 1', isFinished : true},
    {id : 2, text:'todo 2', isFinished : false},
  ]);

   function addTodos(todoText){
    let nextId = todos.length +1 ;
      setTodos([...todos, {id : nextId, isFinished : false, text : todoText}])
   }
  return (
    <>
      <AddTodo addTodos={addTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
