import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import { Button } from './Button'
import {Tasks} from './Tasks'
import { Form } from './Form'

const App = () => {
  const [tasks, setTasks] = useState([{
    id: 1,
    task_name: 'Code some more',
    time: '11:30 AM',
    day: 'Wednesday',
    reminder: true
  },
  {
    id: 2,
    task_name: 'Code a little more',
    time: '1:30 PM',
    day: 'Wednesday',
    reminder: true
  },
  {
    id: 3,
    task_name: 'Eat',
    time: '4:30 PM',
    day: 'Wednesday',
    reminder: true
  }])
  const name = 'Kais'
  const onClickAdd = (e) => {
   console.log(name)
  }
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task)=> task.id !==id))
  }

  const toggleReminder = (id) => {
  setTasks(
    tasks.map((task)=>
     task.id === id ? {...task, reminder: !task.reminder} : task))  }

  return (
    <div className='container'>
      <Header title='Task List'  />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  /> ) : ('No more tasks :)')}
      <Button color='black' text='Add' onClick={onClickAdd}  />

    </div>
    // 
  )
}

export default App
