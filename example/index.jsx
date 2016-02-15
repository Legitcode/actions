import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Todos from './todos'

let store = createStore(reducer)

const Example = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
)

ReactDOM.render(<Example />, document.getElementById('app'))