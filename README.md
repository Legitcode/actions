##legit actions

###WIP

This is a utility for binding actions in redux. The only difference is the way you setup actions.

###Create actions.config.js

In the root of your project
```
export const todos = require('./todos/actions')
export const posts = require('./posts/actions')
```

This file has a list of your different actions. This helps organize where things are in your project.

###Inject some actions!

```
import { actions } from 'legit-actions'

const Todos = ({ dispatch, items, newItem }) => (
  <div>
    First Item: {items[0]}
    <input 
      onKeyDown={e => e.keyCode == 13 && dispatch(newItem(e.target.value))} 
    />
  </div>
)

export default connect(state => ({items: state}))(actions('todos')(Todos))

```

You can use this as a decorator too if you want! The value passed in to the `actions` function is the name of an export from the config file. It will inject all actions as props for you. 