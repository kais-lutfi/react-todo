import React, { useState } from 'react'

export const Form = () => {

  const [ todo, setToDo ] = useState('');

  const handleChange = (e) => {
    setToDo(e.currentTarget.value)
}

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(todo);
    setToDo("");

}  

  return (
  
      <form className='add-form' onSubmit={handleSubmit}>
        <div>
        <label>
          Task:
          <input type="text" value={todo} onChange={handleChange} placeholder="Add Task" />
        </label>
        </div>
      </form>
    
  )
}
