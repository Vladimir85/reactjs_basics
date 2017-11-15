import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './less/main.less'
import StateChange from './components/'
import TodoList from './components/toDo'

render(
  <div>
    <h1 className='text-center'>Dummy App</h1>
    <div className='text-center'>First ReactJS app</div>
    <div className='dummy box-center'></div>
    <TodoList />
    <StateChange />
  </div>,
  document.getElementById('app-container')
)
