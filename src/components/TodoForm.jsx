import React, { useState } from 'react';

const TodoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('')
    const handleChange= (e) => {
        setUserInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>   
            <input className="todo-input" type="text" placeholder='Add a new taskk to do' onChange={handleChange} value={userInput}/>
        <button className='todo-button'>Save</button>
        </form>
    );
};

export default TodoForm;