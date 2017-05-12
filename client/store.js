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
const formInitalState = {
  organization: '',
  location: '',
  date: '',
  time: '',
  phoneNumber: '',
  email: '',
  volunteerCount: '',
  description: ''
}

function formReducer(state= formInitalState, action) {
  switch(action.type) {
    case 'INPUT_UPDATED':
      return Object.assign({}, state, action.field)
    case 'CLEARED':
      return formInitalState
    default:
      return state
  }
}

const reducer = Redux.combineReducers({
  views: views,
  formReducer: formReducer
})

const store = Redux.createStore(reducer)

module.exports = store

window.store = store
