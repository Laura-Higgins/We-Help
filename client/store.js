// Redux Store //
const Redux = require('redux')

function views(state= {currentView: 1}, action) {
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
const formInitalState= {
  organization: '',
  location: '',
  date: '',
  time: '',
  phoneNumber: '',
  email: '',
  volunteerCount: '',
  description: '',
  interestCount: 0
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

function events(state=  [], action) {
  switch(action.type) {
    case 'EVENTS_LOADED':
      return action.data
    default:
      return state
  }
}

const reducer = Redux.combineReducers({
  views: views,
  formReducer: formReducer,
  events: events
})

const store = Redux.createStore(reducer)

module.exports = store

window.store = store
