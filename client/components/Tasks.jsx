import React from 'react'

const tasks = [{
  id: 1,
  task_name: 'Code some more',
  time: '11:30 AM',
  reminder: true
},
{
  id: 2,
  task_name: 'Code a little more',
  time: '1:30 PM',
  reminder: true
},
{
  id: 3,
  task_name: 'Eat',
  time: '4:30 PM',
  reminder: true
}]

export const Tasks = () => {
  return (
    <div>
      {tasks.map((task) => (
      <h4 key={task.id} >{task.task_name}</h4>))}
    </div>
  )
}
