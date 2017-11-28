import React, { Component } from 'react'
import ToDoBox from './toDoBox'
import AddToDo from './addToDo'

let idIncrement = 543

export const ADD = 'add'
export const SET_AS_COMPLETED = 'completed'
export const DELETE = 'delete'

const swapArrayItems = (array, firstIdx, secondIdx) => {
  const first = array[firstIdx]
  array[firstIdx] = array[secondIdx]
  array[secondIdx] = first
}

class ToDoList extends Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }

    this.onChange = this.onChange.bind(this)
    this.changeOrder = this.changeOrder.bind(this)
  }

  onChange(action, toDoObj, value) {
    switch (action) {
      case ADD:
        const newTodo = Object.assign({}, toDoObj, {
          id: ++idIncrement,
          completed: false
        })
        this.setState({
          todos: [...this.state.todos, newTodo]
        })
        break;
      case SET_AS_COMPLETED:
        const todo = this.state.todos.find(el => el.id === toDoObj.id)
        todo.completed = value
        this.setState({
          todos: this.state.todos.map(el => {
            return el.id === toDoObj.id ? todo : el
          })
        })
        break;
      case DELETE:
        this.setState({
          todos: this.state.todos.filter(el => el.id !== toDoObj.id)
        })
        break;
    }
  }

  changeOrder(id, isMoveUp, idx) {
    if ((isMoveUp && idx > 0) || (!isMoveUp && idx < (this.state.todos.length - 1))) {
      const todos   = [...this.state.todos]
      const swapIdx = idx + (isMoveUp ? - 1 : 1)

      swapArrayItems(todos, swapIdx, idx)

      this.setState({
        todos
      })
    }
  }

  render() {
    return <div className='row'>
      <div className='col-sm-offset-2 col-sm-8 col-xs-12'>
        <AddToDo onAdd={(label) => this.onChange(ADD, { label })} />
        {this.state.todos.map((todo, idx) => <ToDoBox
            {...todo}
            key         = { todo.id }
            index       = { idx }
            canMoveUp   = { idx === 0 }
            canMoveDown = { idx === (this.state.todos.length - 1) }
            changeOrder = { (id, isMoveUp) => this.changeOrder(id, isMoveUp, idx) }

            onDelete       = {() => this.onChange(DELETE, todo)}
            onStatusChange =  {value => this.onChange(SET_AS_COMPLETED, todo, value)}
          />)}
      </div>
    </div>
  }
}

export default ToDoList
