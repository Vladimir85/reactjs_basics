import React, { Component } from 'react'

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      label: ''
    }
  }
  updateLabel(evt) {
    this.setState(Object.assign(this.state, {
      label: evt.target.value
    }))
  }

  addItem() {
    const items = this.state.items
    this.setState(Object.assign(this.state, {
      items: [...items, this.state.label],
      label: ''
    }))
  }
  render() {
    return <div style={{borderBottom:'solid 1px grey'}}>
      <h4>To Do List Component:</h4>
      <ul>
        {this.state.items.map((el, idx) => <li key={idx}>{el}</li>)}
      </ul>
      <input onChange={(evt) => this.updateLabel(evt)} type='text' value={this.state.label} />
      <button onClick={() => this.addItem()}>Add new Item</button>
    </div>
  }
}

export default TodoList
