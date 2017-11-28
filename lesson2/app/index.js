import React, { Component } from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './less/main.less'

import Button from './components/ui/button'

import ToDoList from './components/toDoList'

render(
  <div className='container'>
    <h1 className='text-center'>ToDo's App</h1>
    <ToDoList />
  </div>,
  document.getElementById('app-container')
)
