import React from 'react'

const Button = ({ disabled = false, type, label, onClick, children, buttonType = 'button' }) => <button
  disabled  = { disabled }
  className = { `btn btn-${type}` }
  onClick   = { onClick }
  type      = { buttonType }
  >{children}{label}</button>

export default Button
