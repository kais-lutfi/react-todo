import React from 'react'
import { FaTimes } from 'react-icons/fa'

export const Task = ( {task, onDelete}) => {
  return (
    <div className='task'>
      <h3>{task.task_name} <FaTimes onClick={() =>
        onDelete(task.id)}/></h3>
      <p>{task.time}</p>
      <p>{task.day}</p>
      </div>
  )
}
