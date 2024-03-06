import { useState } from 'react';

const AddTodo = ({addTodos}) => {
    const[todoText, setTodoText] = useState('');
    return (
        <div>
            <input placeholder='Ad your next Todo....' 
                   onChange={(e) => setTodoText(e.target.value)}
                   value={todoText}
            />

            <button onClick={() => {
                addTodos(todoText);
                setTodoText(''); // the input becomes empty after submitting 
            }}>Submit</button>
        </div>
    );
}

export default AddTodo;
