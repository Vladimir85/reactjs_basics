import React from 'react'
import Button from './ui/button'
import { SET_AS_COMPLETED } from './toDoList'

const ToDoBox = (props) => {
  const { canMoveUp, canMoveDown, label, completed, onStatusChange, changeOrder, onDelete } = props
  return <div className='row panel panel-default'>
    <div className='col-sm-8 col-xs-12 panel-body checkbox'>
      <label>
        <input type='checkbox' checked={completed} onChange={evt => onStatusChange(evt.target.checked)} />
        {label}
      </label>
    </div>
    <div className='col-sm-4 col-xs-12 panel-body text-right'>
      <Button label='X' type='danger' onClick={onDelete}/>
      <Button disabled={canMoveUp} type='warning' onClick={() => changeOrder(props.id, true)}>
        <span className='glyphicon glyphicon-chevron-up'></span>
      </Button>
      <Button disabled={canMoveDown} type='warning' onClick={() => changeOrder(props.id, false)}>
        <span className='glyphicon glyphicon-chevron-down'></span>
      </Button>
    </div>
  </div>
}

export default ToDoBox
