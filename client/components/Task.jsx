import React from 'react'
import { FaTimes } from 'react-icons/fa'

export const Task = ( {task, onDelete, onToggle}) => {
  return (
    <div className='task' onDoubleClick={() =>
      onToggle(task.id)}>
      <h3>{task.task_name} <FaTimes onClick={() =>
        onDelete(task.id)}/></h3>
      <p>{task.time}</p>
      <p>{task.day}</p>
      </div>
  )
}

export default Task
