import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import { Button } from './Button'
import { Tasks } from './Tasks'

const App = () => {
  const name = 'Kais'
  const onClick = (e) => {
    console.log(name)
  }

  return (
    <div className='container'>
      <Header   />
      <Tasks />
      <Button color='black' text='Add' onClick={onClick} />

    </div>
    // 
  )
}

export default App
