import React, { Component } from 'react'
import Button from './ui/button'
import { ADD } from './toDoList'

class AddToDo extends Component {

  constructor() {
    super()
    this.state = {
      label: ''
    }
    this.onAddBtnClick = this.onAddBtnClick.bind(this)
  }

  onAddBtnClick(evt, { label }) {
    // Prevent default Browser's SUBMIT action
    evt.preventDefault()
    if (label && label.trim() !== '') {
      this.props.onAdd(label)
    }
    this.setState({
      label: ''
    })
  }

  render() {
    return <form className='input-group' style={{marginBottom: '20px'}} onSubmit={(evt) => this.onAddBtnClick(evt, this.state)}>
        <input
          type='text'
          className='form-control'
          placeholder='What do you want to do?'
          value={this.state.label}
          onChange={(evt) => this.setState({ label: evt.target.value })}
        />
        <span className='input-group-btn'>
          <Button buttonType='submit' type='primary' label='Add' />
        </span>
      </form>
  }
}

export default AddToDo
