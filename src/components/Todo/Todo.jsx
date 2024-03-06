import React from 'react';

const Todo = ({text, isFinished, deleteTodo}) => {
    return (
        <div>
            <input type="checkbox" checked = {isFinished} />
            <span>{text}</span>
            <button>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
}

export default Todo;
