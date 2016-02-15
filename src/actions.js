import React from 'react'

const actions = (actions) => {
  return component => {
    let selectedActions = require('actions.config')[actions]
    const LegitActions = props => React.createElement(component, { ...selectedActions, ...props })
    return LegitActions
  }
}

export default actions