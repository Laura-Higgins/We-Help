// Redux Store //
const Redux = require('redux')

function reducer(state, action) {
  switch(action.type) {
    case 'CHANGED_NONPROFIT':
      return 1
    case 'CHANGED_VOLUNTEER':
      return 2
    default:
      return state
  }
}

const store = Redux.createStore(reducer)

module.exports = store

window.store = store
