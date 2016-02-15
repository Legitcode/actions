import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../src'

const TodosStateless = ({ dispatch, items, newItem }) => (
  <div>
    First Item: {items[0]}
    <input 
      onKeyDown={e => e.keyCode == 13 && dispatch(newItem(e.target.value))} 
    />
  </div>
)

export default connect(state => ({items: state}))(actions('todos')(TodosStateless))

//or

@actions('todos')
class Todos extends React.Component {

  render() {
    console.log(this)
    let { dispatch, items } = this.props
    return (
      <div>
        First Item: {items[0]}
        <input 
          onKeyDown={e => e.keyCode == 13 && dispatch(newItem(e.target.value))} 
        />
      </div>
    )
  }
}

//export default connect(state => ({items: state}))(Todos)