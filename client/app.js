const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const HomePage = require('./home-page')

function App(props) {
  switch (props.views.currentView) {
    case 1:
      return (
        <HomePage/>
      )
      case 2:
        return (
          <div></div>
        )
      case 3:
        return (
          <div></div>
        )
    default:
      return (
        <div></div>
      )
  }
}

module.exports = App
