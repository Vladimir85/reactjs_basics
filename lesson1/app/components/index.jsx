import React, { Component } from 'react'

class StateChange extends Component {
  constructor() {
    super()
    this.state = {
      title     : '',
      timestamp : ''
    }
  }

  showTs(evt) {
    this.setState(Object.assign(this.state, {
      timestamp: new Date().toString()
    }))
  }

  updateTitle(evt) {
    this.setState(Object.assign(this.state, {
      title: evt.target.value
    }))
  }

  render() {
    return <div>
      <h1>Dynamic title: {this.state.title}</h1>
      Type here: <input onChange={(evt) => this.updateTitle(evt)} type='text' value={this.state.title} />
      <div>
        <h4>Datetime: {this.state.timestamp}</h4>
        <button onClick={this.showTs.bind(this)}>Show the datetime</button>
      </div>
    </div>
  }
}

export default StateChange
