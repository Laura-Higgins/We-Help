// Redux Store //
const Redux = require('redux')

function views(state = {currentView: 1}, action) {
  switch(action.type) {
    case 'CHANGED_HOMEPAGE':
      return Object.assign({}, state, {currentView: 1})
    case 'CHANGED_NONPROFIT':
      return Object.assign({}, state, {currentView: 2})
    case 'CHANGED_VOLUNTEER':
      return Object.assign({}, state, {currentView: 3})
    default:
      return state
  }
}

const reducer = Redux.combineReducers({
  views: views
})

const store = Redux.createStore(reducer)

module.exports = store

window.store = store
