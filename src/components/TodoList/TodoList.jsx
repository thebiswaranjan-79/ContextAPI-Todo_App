import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({todos, setTodos}) => {

    function onDeleteTodo(id){
        const newTodoList = todos.filter((todo) => todo.id != id);
        setTodos(newTodoList);
    }

    return (
      
            todos &&
             todos.map((todo) => 
             <Todo key={todo.id} 
                   text={todo.text} 
                   isFinished = {todo.isFinished} 
                   deleteTodo={()=>onDeleteTodo(todo.id)}
                   />)
  
    );
}

export default TodoList;















