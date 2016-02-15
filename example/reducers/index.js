export default (state = [], action) => {
  switch(action.type) {
    case 'new':
      return [action.item, ...state]
    default:
      return state
  }
}